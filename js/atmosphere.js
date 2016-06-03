// Состояние атмосферы на уровне моря 
var Atmosphere = function(callback) {

};

Atmosphere.prototype.pressure = function(longitude, latitude, altitude, T, Pzero) {
    // TODO: Брать давление из данных сервера
    
    Pzero = Pzero || Consts.Pzero;
    return Pzero * Math.pow(Math.E, -1 * Consts.M.air * Consts.G * altitude / (Consts.R * T));
};

Atmosphere.prototype.temperature = function(longitude, latitude, altitude) {
    // TODO: Брать температуру из данных сервера
    
    
};

Atmosphere.prototype.get = function(longitude, latitude, altitude) {
    
}

