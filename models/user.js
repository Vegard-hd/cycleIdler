module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "User",
    {
      FirstName: Sequelize.DataTypes.STRING,
      LastName: Sequelize.DataTypes.STRING,
      Username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      EncryptedPassword: {
        type: Sequelize.DataTypes.BLOB,
        allowNull: false,
      },
      Salt: {
        type: Sequelize.DataTypes.BLOB,
        allowNull: false,
      },
      Role: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: "Player",
      },
      Time: {
        type: Sequelize.DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    },
  );
  User.associate = function (models) {
    //setup associations for user here
    User.hasOne(models.Tyre);
    User.hasOne(models.Wheel);
    User.hasOne(models.Frame);
    // User.belongsToMany(models.Hotel, { through: models.Rate });
    // User.belongsToMany(models.Room, { through: models.Reservation });
  };
  return User;
};
