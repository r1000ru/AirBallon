// Состояние атмосферы на уровне моря 
var Atmosphere = function(callback) {

};

Atmosphere.prototype.pressure = function(altitude, T, Pzero) {
    Pzero = Pzero || Consts.Pzero;
    return Pzero * Math.pow(Math.E, -1 * Consts.M.air * Consts.G * altitude / (Consts.R * T));
};

Atmosphere.prototype.temperature = function(altitude, Tzero) {
    
}

Atmosphere.prototype.get = function(longitude, latitude, altitude) {
    
}

