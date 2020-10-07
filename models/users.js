const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class Users extends Sequelize.Model {}
  Users.init(
    {
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      emailAdress: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
    },
    { sequelize }
  );
  Users.associate = (models) => {
    Users.hasMany(models.Courses, {
      as: "user",
      foreignKey: {
        fieldName: "userId",
        allowNull: false,
      },
    });
  };
  return Users;
};
