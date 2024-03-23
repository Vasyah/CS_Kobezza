const instructions = {
    // установить значение в
    'SET A': 0,
    'PRINT A': 1,
    // loop
    'IFN A': 2,
    // return
    'RET': 3,
    // уменьшить на
    'DEC A': 4,
    //
    'JMP': 5
};

const program = [
    // Ставим значения аккумулятора
    instructions['SET A'],
    // В 10
    10,

    // Выводим значение на экран
    instructions['PRINT A'],

    // Если A равно 0
    instructions['IFN A'],

    // Программа завершается
    instructions['RET'],

    // И возвращает 0
    0,

    // Уменьшаем A на 1
    instructions['DEC A'],

    // Устанавливаем курсор выполняемой инструкции
    instructions['JMP'],

    // В значение 2
    2
];

// Выведет в консоль
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// И вернет 0
execute(program);

function execute(program) {
    let value;
    let idx = 0;

    while (true) {
        // если пришла команда RET
        if (idx === false) {
            return
        }

        cache = makeInstrustion(program[idx], program, idx, value)

        value = cache.value
        idx = cache.idx

    }


    /**
     * Функция отвечает за выполнение команды, каждое выполнение команды
     * ведёт к переходу к следующей команде, в случае если вызвана:
     * 'PRINT A', 'DEC A'
     * 'SET A" - шаг на idx+1 команду,
     * 'JMP' - шаг на idx команду,
     * 'RET' - возвращает idx+1 значение и завершает выполнение программы
     * 'IFN A' - если удовлетворяет значени то выполнеие idx+1 следующей команды, если нет, то idx+2
     */
    function makeInstrustion(currentCommand, program, idx, value) {
        // console.log('startInstruction', { currentCommand, program, idx, value })
        switch (currentCommand) {
            case instructions['SET A']:
                value = program[idx + 1]

                return cacheFactory(idx + 2, value)
            case instructions['PRINT A']:
                console.log(value)

                return cacheFactory(idx + 1, value)
            case instructions["IFN A"]:
                if (value === 0) {
                    return cacheFactory(idx + 1, value)
                } else {
                    const nextCommand = program[idx + 1]
                    const twoStepInstructions = [instructions['SET A'], instructions["IFN A"], instructions["RET"]]

                    let idxTmp = idx
                    if (twoStepInstructions.includes(nextCommand)) { idxTmp += 3 }
                    else { idxTmp += 2 }
                
                    return cacheFactory(idxTmp, value)
                }
            case instructions["RET"]:
                value = program[idx + 1]

                return cacheFactory(false, value)
            case instructions["DEC A"]:
                value -= 1

                return cacheFactory(idx + 1, value)
            case instructions["JMP"]:
                const jmpIdx = program[idx + 1]

                return cacheFactory(jmpIdx, value)
        }
    }

    /**
     * функция отвечает за указание на какую команду в программе необходимо переместиться
     * @return возвращает number - номер команды или false - движение не нужно
     *  */
    function cacheFactory(idx, value) { return { idx, value } }
}