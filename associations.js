module.exports = function(db) {
  db.Burger.belongsTo(db.Customer, { foreignKey: { allowNull: false } });
  db.Customer.hasOne(db.Burger);
};