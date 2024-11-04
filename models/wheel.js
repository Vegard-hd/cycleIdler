module.exports = (sequelize, Sequelize) => {
  const Wheel = sequelize.define(
    "Wheel",
    {
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
  Wheel.associate = function (models) {
    // Define associations here
  };
  return Wheel;
};
