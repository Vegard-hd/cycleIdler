module.exports = (sequelize, Sequelize) => {
  const Frame = sequelize.define(
    "Frame",
    {
      Material: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      SpeedMultiplier: {
        type: Sequelize.DataTypes.DECIMAL(5, 3),
        allowNull: false,
        default: 1.0,
        validate: {
          min: 1.0,
          max: 10.0,
        },
      },
      // Add other relevant fields
    },
    {
      timestamps: false,
    },
  );
  Frame.associate = function (models) {
    // Define associations here
    Frame.belongsTo(models.User);
  };
  return Frame;
};
