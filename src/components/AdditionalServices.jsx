import React from 'react'
import {Accordion} from 'react-bootstrap'

const AdditionalServices = ({additionalServic}) => {
  const {
    connection,
    fasterConection,
    secondConnection,
    connectionCoolCabel,
    tarrifDown,
    dedicatedIp,
    cableMetr,
    specialistCall,
    windows,
    notWindows,
    serviceRouter,
    addNetworkCard,
  } = additionalServic

  return (
    <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Додатковi послуги</Accordion.Header>
        <Accordion.Body>
          <p>
            1. Зміна фізичної точки включення – <strong>{connection}</strong>{' '}
            грн. при терміні виконання перенесення протягом 10 робочих днів,{' '}
            <strong>{fasterConection}</strong> грн. при терміні протягом 3
            робочих днів.
          </p>
          <p>
            2. Повторне підключення (розблокування після автоматичного
            блокування) - <strong>{secondConnection}</strong> грн.
          </p>
          <p>
            3. Підключення абонента кабелем для зовнішньої прокладки (без троса)
            - <strong>{connectionCoolCabel}</strong> грн.
          </p>
          <p>
            4. Перехід на тарифний план з меншою оплатою -{' '}
            <strong>{tarrifDown}</strong> грн. Перехід на тарифний план з
            більшою оплатою - БЕЗКОШТОВНО
          </p>
          <p>
            5. Реальна (біла) IP адреса - <strong>{dedicatedIp}</strong>{' '}
            грн./міс.
          </p>
          <p>
            6. Введення кабелю в приміщення Абонента (понад 10 м від входу в
            квартиру) – <strong>{cableMetr}</strong> грн./метр
          </p>
          <p>
            7. Виклик фахівця додому - <strong>{specialistCall}</strong> грн.
            Діагностика, ремонт пошкодженого кабелю або заміна коннектора
            входять у вартість виклику. У разі необхідності заміни кабелю у
            приміщенні абонента він оплачується окремо.
          </p>
          <p>
            8. Налаштування Оператором устаткування і клієнтського програмного
            забезпечення в рамках операційних систем Мs Windows 2000, XP, Vista
            за 1 робоче місце: первинна – БЕЗКОШТОВНО повторна –{' '}
            <strong>{windows}</strong> грн.
          </p>
          <p>
            9. Налаштування інших (не Windows) операційних систем -{' '}
            <strong>{notWindows}</strong> грн.
          </p>
          <p>
            10. Налаштування маршрутизатора (роутера) -{' '}
            <strong>{serviceRouter}</strong> грн.*
          </p>
          <p>
            11. Замороження рахунку надається на термін не більше ніж 3 (три)
            місяці на рік. Мінімальний термін блокування складає 14 днів –
            БЕЗКОШТОВНО. Повторне блокування за ініціативою Абонента проводиться
            не раніше, чим через 1 (один) календарний місяць з дня зняття
            попереднього.
          </p>
          <p>
            12. Встановлення мережевої карти, яка надається Абонентом –{' '}
            <strong>{addNetworkCard}</strong> грн.
          </p>
          <p>
            *— Налаштування WI-FI обладнання здійснюється не більше ніж на 3-х
            ПК, наявних у Абонента в момент установки. Налаштування проводиться
            на комп'ютерах, що працюють тільки під керуванням ОС сімейства
            Windows. В ціну не входить вартість підключення до мережі Інтернет,
            яка визначається обраним тарифним планом і умовами надання доступу в
            Інтернет.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default AdditionalServices
