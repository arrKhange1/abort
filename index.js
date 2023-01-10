const button = document.querySelector('button');

const complexAction = (signal) => {
    return new Promise((resolve, reject) => {
        // эмуляция долгой обработки
        const asyncFunc = setTimeout(resolve, 3000);

        signal.addEventListener('abort', e => {
            clearTimeout(asyncFunc);
            reject();
        });
    });
};

const abortController = new AbortController();
button.addEventListener('click', e => {
    abortController.abort();
});


complexAction(abortController.signal).then(() => {
    alert('Обработка успешно выполнена!');
}).catch(() => {
    alert('Обработка отменена!');
});
