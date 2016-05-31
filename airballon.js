var Balloon = function(radius, weight, Pdiff) {
    this._radius = radius;                  // Радиус шара
    this._weight = weight;                  // Вес шара и оболочки
    this._Pdiff = Pdiff;                    // Предельная разница давлений, когда шар лопнет (актуально для латексных)
    
    this._CxZ = 0.3;                        // Коэфициент вертикального сопротивления
    this._CxXY = 0.4;                       // Коэфициент горизонтального сопротивления
    
    // Константы
    this._G = 9.81;                         // Ускорение свободного падения
    this._R = 8.31447;                      // Универсальная газовая постоянная
    this._M = {                             // Молярные массы воздуха, гелия и водорода
        air: 0.0289644,
        helium: 0.004002602,
        hydrogen: 0.00100811
    };
    
    // Текущие скорости по координатам
    this._speed = {
        x: 0,
        y: 0,
        z: 0  
    };
    
    // Текущие ускорения по координатам
    this._accel = {
        x: 0,
        y: 0,
        z: 0  
    };
    
    // Текущие отклонения от точки старта
    this._coord = {
        x: 0,
        y: 0,
        z: 0  
    };
};

// Плотность газа из молярной массы и давления
Balloon.prototype.calcDensity = function(M, P) {
    return P * M / (R * T);
};


// Подъемная сила из плотности воздуха и объема шара
Ballon.prototype.calcFUp = function(p, V) {
    return this.G * V * p;  
};

// Сила притяжения из массы шара + массы газа
Balloon.prototype.calcFDown = function(m) {
    return this.G * m;
};

// Сила сопротивления, в зависимости от коэфициента, плотности среды, скорости и площади сечения 
Ballon.prototype.calcFcX = function(Cx, p, deltaV, S) {
    return Cx * p * Math.pow(deltaV, 2) * S / 2;
};

