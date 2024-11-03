module.exports = (sequelize, Sequelize) => {
  const Frame = sequelize.define(
    "Frame",
    {
      Material: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
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
  Frame.associate = function (models) {
    // Define associations here
  };
  return Frame;
};
