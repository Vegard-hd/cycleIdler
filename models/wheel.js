module.exports = (sequelize, Sequelize) => {
  const Wheel = sequelize.define(
    "Wheel",
    {
      SpeedMultiplier: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
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
