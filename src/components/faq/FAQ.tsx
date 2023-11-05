import Accordion from "./Accordion";

const accordionInformationDelivery = [
    {
        Num: '1',
        point: 'Нова Пошта',
        boldText: ['Швидкість:', 'Зручність:', 'Вартість:'],
        DescribeBoldText: [
                            ' 2-3 дні (терміни можуть відрізнятися в залежності від регіону)',
                            ' Ви можете обрати будь-яке відділення "Нової Пошти" для отримання замовлення, або скористатися доставкою до дверей.',
                            ' Вартість доставки визначається згідно з тарифами "Нової Пошти" та залежить від розміру та ваги вашого замовлення.'
                          ]
    },
    {
        Num: '2',
        point: 'Укрпошта',
        boldText: ['Швидкість:', 'Доступність:', 'Вартість:'],
        DescribeBoldText: [
                                ' 6-11 днів (терміни можуть відрізнятися в залежності від регіону)',
                                ' Цей варіант може бути найкращим, якщо ви проживаєте в віддалених регіонах або маленьких містах.',
                                ' Вартість доставки "Укрпоштою" визначається згідно з їхніми тарифами і залежить від ваги та розміру замовлення.'
                          ]
    },
    {
        Num: '3',
        point: 'Самовивіз з пункту',
        boldText: ['Швидкість:', 'Доступність:', 'Вартість:'],
        DescribeBoldText: [' 1-2 дні', ' Ви можете перевірити якість товару в пункті видачі', ' Безкоштовно']
    }
]

const accordionInformationGuarantees = [
    {
        Num: '1',
        point: 'Графік роботи сервіс-консультанта',
        boldText: ['Пошта:', 'Пн-Пт:', 'Сб-Нд:'],
        DescribeBoldText: [' service@mastercomponent.net', ' 09:00-18:00', ' Вихідний']
    },
    {
        Num: '2',
        point: 'Підтвердження',
        boldText: [''],
        DescribeBoldText: ["Гарантія передбачає безкоштовне усунення дефекту, який виник з вини виробника протягом гарантійного терміну. Підтвердженням гарантії служить товарний чек або видаткова накладна, і гарантійний талон із зазначенням номера замовлення, найменування виробу, серійного номера, і терміну гарантії."]
    },
    {
        Num: '3',
        point: 'Терміни',
        boldText: [''],
        DescribeBoldText: ['Термін гарантії на продукцію залежить від сервісної політики виробника або імпортера. Тривалість гарантійного терміну на конкретний товар ви можете побачити на нашому сайті в картці цього товару.']
    }
]

const accordionInformationPayment = [
    {
        Num: '1',
        point: 'Умови',
        boldText: [''],
        DescribeBoldText: ['Якщо ви зробили замовлення на суму від 100 000 грн з доставкою Новою поштою або Укрпоштою, та плануєте розрахуватись на відділенні після отримання, зробіть передоплату у розмірі 10% від вартості замовлення.']
    },
    {
        Num: '2',
        point: 'Способи оплати',
        boldText: ['Оплата готівкою:', 'Післяплата:', 'Карткою онлайн:', 'Покупка частинами monobank:', 'Оплата частинами від ПриватБанку:', 'Плати пізніше:'],
        DescribeBoldText: [
            ' Ви оглядаєте товар у шоурумі і сплачуєте замовлення готівкою менеджеру',
            " Виконайте післяплату в момент отримання замовлення. Обов'язково перевірте товар та заповніть всі необхідні документи. Сплатити за товар можна у пунктах видачі поштових операторів (Нова пошта та Укрпошта), або під час видачі замовлення кур'єром.",
            ' Отримати замовлення, сплачене карткою онлайн, можливо за наявності документа, що підтверджує особу одержувача, зазначеного при оформленні замовлення.',
            ' Дозволяє розбити платіж на строк від 3 до 6 місяців.Мінімальна вартість товару - 500 грн. Максимальна - 200 000 грн.',
            ' При виборі цього методу оплати сума розбивається на 3-9 місяців.Мінімальна вартість товару - 300 грн. Максимальна - 299 999 грн.',
            ' Ви можете взяти товар у кредит на наступний строк:3 місяці, 4 місяці, 5 місяців, 6 місяців, 10 місяців.'
        ]
    },
]

const accordionInformationReturns = [
    {
        Num: '1',
        point: 'Повернення та обмін товару',
        boldText: [''],
        DescribeBoldText: ['Обмін і повернення товару здійснюється протягом 14 днів після покупки. Повернення товару регламентовано Законом України "Про захист прав споживачів".']
    },
    {
        Num: '2',
        point: 'Умови обміну або повернення',
        boldText: [''],
        DescribeBoldText: ["Минуло не більше 14 днів від дня покупки. Товар повинен бути в повній комплектації і не мати слідів використання. Всі пакувальні матеріали, в тому числі пломби і ярлики, збережені цілими."]
    },
    {
        Num: '3',
        point: 'Оформлення',
        boldText: ['', ''],
        DescribeBoldText: [
            'Для оформлення обміну товару на іншу модель нам знадобляться оригінали гарантійного талону і товарного чеку. При поверненні коштів - ще й ваші паспортні дані, ІПН, номер банківської карти, на яку необхідно здійснити повернення.',
            'Для оформлення заявки вам необхідно звернутися за телефоном (067) 403-11-30 або оформити заявку через особистий кабінет на сайті.'
        ]
    }
]

//plan:
{/*

1)даю обьект акордиону
2)

*/}
export default function FAQ() {
    return(
        <div className="flex flex-col items-center mb-[18vw]">
            <h2 className="text-center font-[600] text-[2.5vw] mb-[3vw] min-[280px]:text-[25px] min-[700px]:text-[3.5vw]">FAQ</h2>
            <div className="flex flex-col gap-[1vw] min-[280px]:gap-[3vw]">
                <Accordion accordionInformation={accordionInformationDelivery} Openheight="min-[280px]:h-[129vw] min-[500px]:h-[69vw] min-[1000px]:h-[56vw]" Name="Доставка"/>
                <Accordion accordionInformation={accordionInformationGuarantees} Openheight="min-[280px]:h-[100vw] min-[500px]:h-[56vw] min-[1000px]:h-[47vw]" Name="Гарантійність"/>
                <Accordion accordionInformation={accordionInformationPayment} Openheight="min-[280px]:h-[170vw] min-[500px]:h-[84vw] min-[1000px]:h-[69vw]" Name="Оплата"/>
                <Accordion accordionInformation={accordionInformationReturns} Openheight="min-[280px]:h-[101vw] min-[500px]:h-[60vw] min-[1000px]:h-[53vw]" Name="Повернення та обмін"/>
            </div>
        </div>
    )
};
