import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";

const User = (sequelize) => {
  return sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false, // changed it to implement proper login
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("teacher", "student", "admin", "parent"),
      allowNull: false,
      defaultValue: "student",
    },
  });
};

// hash password on creation
User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(user.password, salt);
});

// hash password when updating
User.beforeUpdate(async (user) => {
  if (user.changed("password")) {
    const salt = await bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);
  }
});

// verify password
User.prototype.validPassword = async function (password) {
  return await bcrypt.compareSync(password, this.password);
}

/* use case:
const isMatch = userInstance.validPassword('inputpassword');
if (isMatch) // do something
else // do something else
*/


export default User;
