module.exports = (sequelize, DataTypes) => {
    const PluxTransaccionesBilleteras = sequelize.define('PluxTransaccionesBilleteras', {
      id_transaccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fecha_transaccion: DataTypes.DATE,
      cod_tipo_transaccion: DataTypes.INTEGER,
      cod_catalogo: DataTypes.INTEGER
    }, {
      tableName: 'plux_transacciones_billeteras',
      timestamps: false
    });
    return PluxTransaccionesBilleteras;
  };
  