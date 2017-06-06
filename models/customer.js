// model for customer table... not used

module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    Customer.sync();
    return Customer;
};
