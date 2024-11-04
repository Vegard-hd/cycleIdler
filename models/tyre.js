module.exports = (sequelize, Sequelize) => {
  const Tyre = sequelize.define(
    "Tyre",
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
      Compound: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      // Add other relevant fields
    },
    {
      timestamps: false,
    },
  );
  Tyre.associate = function (models) {
    // Define associations here
  };
  return Tyre;
};
