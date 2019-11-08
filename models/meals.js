module.exports = function(sequelize, DataTypes) {
    let Meal = sequelize.define("meal", {
      mealName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 1
        }
      },
      ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 1 
        }
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        isNumeric: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 1 
        }
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 1 
        }
      }
    });

    Meal.associate = function(models) {
        Meal.belongsTo(models.chef, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Meal
    }