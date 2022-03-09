function calc(KVM,TPM,ZPR){
    //Данные из инвестиции бюджета
    const YCK = 180000; //Услуги Сервисной Компании
    const TO = TPM < 100 ?  9000: 8200; //Торговое оборудование
    const technique = TPM <= 100 ? 250000 : 500000; //Техника: компьютеры,кассы,1С лицензии
    const IT = 10000; //Техника: компьютеры,кассы,1С лицензии
    const MSS = 30000; //Монтаж слаботочных сетей
    const security = TPM <= 100 ? 90000 : 120000; //Безопасность (Ворота защитные+датчики)
    const TZ = 23000; //Товарная загрузка
    const PLO = 3600; //Праздничная листовка открытия
    const ADS = TPM < 100 ? 180000 : 250000; //Затраты на Внутренюю и внешнюю рекламу
    const RTP = 100000; //Ремонт торгового помещения
    let ZPP = TPM <= 100 ? 4 : 6; //Заработная плата Персонала
    let POMPR = TPM < 100 ? 162000 : 230000;//Праздничное открытие МПР


    //Данные из операционной бюджета
    let revenue = TPM <= 100 ? 54000 : 82500;//Выручка в мес, руб
    const INCOME = TPM < 100 ? 55 : 50;//Валовый доход, руб
    let rent = TPM <= 100 ? 15 : 20;//Аренда, руб
    const FOT = ZPP*ZPR*1.3;//ФОТ (заработная плата), руб
    const OTHER = 45; //Прочие расходы (реклама, хознужды и т.п.)
    let payback = 0;//Окупаемость , мес

    //Условие замены значении переменных
    if(TPM > 170){
        ZPP = 8;
        POMPR = 289000;
        rent = 25;
        revenue = 99000;
        POMPR = 289000;
    }
    if(TPM >= 170){
        POMPR = 289000;
    }

    //инвест
    let investSumma = YCK + (TO*TPM) + technique + IT + MSS + security + (TZ*TPM) + (PLO*TPM) + ADS + RTP + (ZPP*ZPR*1.3) + (POMPR);
    document.getElementById('YCK').innerHTML = YCK.toLocaleString('ru');
    document.getElementById('TO').innerHTML = (TO*TPM).toLocaleString('ru');
    document.getElementById('technique').innerHTML = technique.toLocaleString('ru');
    document.getElementById('IT').innerHTML = IT.toLocaleString('ru');
    document.getElementById('MSS').innerHTML = MSS.toLocaleString('ru');
    document.getElementById('security').innerHTML = security.toLocaleString('ru');
    document.getElementById('TZ').innerHTML = (TZ*TPM).toLocaleString('ru');
    document.getElementById('PLO').innerHTML = (PLO*TPM).toLocaleString('ru');
    document.getElementById('ADS').innerHTML = ADS.toLocaleString('ru');
    document.getElementById('RTP').innerHTML = RTP.toLocaleString('ru');
    document.getElementById('ZPP').innerHTML = (ZPP*ZPR*1.3).toLocaleString('ru');
    document.getElementById('POMPR').innerHTML = POMPR.toLocaleString('ru');
    document.getElementById('investSumma').innerHTML = investSumma.toLocaleString('ru');

    //операционность
    let rentNum = parseInt(rent);
    let incomeNum= ((revenue*30)/((100+INCOME)/100))*INCOME/100;
    let otherNum = (FOT+( (TPM + rentNum) * KVM) )*(OTHER/100)
    let operionSumma = incomeNum - ((TPM + rentNum) * KVM) - FOT - otherNum;

    document.getElementById('revenue').innerHTML = (revenue*30).toLocaleString('ru');
    document.getElementById('INCOME').innerHTML = incomeNum.toLocaleString('ru');
    document.getElementById('rent').innerHTML = ((TPM + rentNum) * KVM).toLocaleString('ru');
    document.getElementById('FOT').innerHTML = FOT.toLocaleString('ru');
    document.getElementById('OTHER').innerHTML = otherNum.toLocaleString('ru');

    document.getElementById('operionSumma').innerHTML = operionSumma.toLocaleString('ru');
    document.getElementById('payback').innerHTML = Math.round(investSumma/operionSumma);

    console.log(otherNum)
}
