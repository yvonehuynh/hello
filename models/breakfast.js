module.exports = function(sequelize, DataTypes) {
  var Breakfast = sequelize.define("Breakfast", {
   
    name: DataTypes.STRING,
    url: DataTypes.STRING
    
  });
  return Breakfast;
};
