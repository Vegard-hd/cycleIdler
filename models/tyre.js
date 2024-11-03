module.exports = (sequelize, Sequelize) => {
  const Tyre = sequelize.define(
    "Tyre",
    {
      SpeedMultiplier: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
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
