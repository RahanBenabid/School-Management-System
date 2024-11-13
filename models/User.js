import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";

const User = (sequelize) => {
  const model = sequelize.define("User", {
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
      allowNull: false,
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
  
  // hash password on creation
  model.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  });
  
  // hash password when updating
  model.beforeUpdate(async (user) => {
    if (user.changed("password")) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
  });
  
  // verify password
  model.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
  return model;
};

export default User;