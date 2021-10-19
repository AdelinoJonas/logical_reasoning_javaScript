const carro = {

    velocidade: 0,

    ligado: false,

    ligar: function () {
        if (this.ligado) {
            console.log('Este carro já está ligado.');
        } else {
            this.ligado = true;

            let modoCarro = this.ligado ? 'Ligado' : 'Desligado';

            console.log(`Carro ${modoCarro}! Velocidade: ${carro.velocidade}.`);
        }
    },

    desligar: function () {

        if (!this.ligado) {

            console.log('Este carro já está desligado.');

        } else {

            this.ligado = false;
            this.velocidade = 0;

            let modoCarro = this.ligado ? 'ligado' : 'desligado';

            console.log(`Carro ${modoCarro}! Velocidade: ${carro.velocidade}.`);
        }
    },

    acelerar: function () {

        if (!this.ligado) {

            console.log('Não é possível acelerar um carro desligado.');

        } else {
            this.velocidade += 10;

            let modoCarro = this.ligado ? 'Ligado' : 'Desligado';

            console.log(`Carro ${modoCarro}! Velocidade: ${carro.velocidade}.`);
        }
    },

    desacelerar: function () {

        if (!this.ligado) {

            console.log('Não é possivel desacelerar um carro desligado');

        }else {
        
            this.velocidade -= 10;

            let modoCarro = this.ligado ? 'Ligado' : 'desligado';

            console.log(`Carro ${modoCarro}! velocidade: ${carro.velocidade}.`);
        }
    }
}
carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
