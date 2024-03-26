// Это превысит размер кучи во вкладке браузера и всё упадёт
// будет  ошибка из-за нехватки памяти страница была перезагружена
// const arr = new Array(2 ** 32 - 1).fill(10);

// обход в глубину

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 3 }],
    },
    {
      value: 4,
      children: [{ value: 5 }, { value: 6 }],
    },
  ],
};

function getTreeValues(tree) {
  let result = [];

  Object.values(tree).forEach((element) => {
    if (Array.isArray(element)) {
      element.forEach((el) => (result = result.concat(getTreeValues(el))));
    } else {
      result = result.concat(element);
    }
  });

  return result;
}

console.log(getTreeValues(tree)); // [1, 2, 3, 4, 5, 6] порядок соблюдать не обзательно

//  Связный список - структура данных, в которой каждый элемент содержит в себе данные и ссылку на след. элемент
const value3 = {
  data: "text of value-3",
  next: null,
};

const value2 = {
  data: "text of value-2",
  next: value3,
};

const value1 = {
  data: "text of value-1",
  next: value2,
};

function traverse(list) {
  const result = [];
  do {
    result.push(list.data);

    list = list.next;
  } while (list);

  console.log(result);
}

traverse(value1);
