const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class Courses extends Sequelize.Model {}
  Courses.init(
    {
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      estimatedTime: {
        type: Sequelize.STRING,
      },
      materialsNeeded: {
        type: Sequelize.STRING,
      },
    },
    { sequelize }
  );
  Courses.associate = (models) => {
    Courses.belongsTo(models.Users, {
      as: "user",
      foreignKey: {
        fieldName: "userId",
        allowNull: false,
      },
    });
  };
  return Courses;
};
