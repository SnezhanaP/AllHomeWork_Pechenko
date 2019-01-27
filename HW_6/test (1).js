(function personalData () {

    let personalInfo = {};

    for (let i = 0; i < 4; i++) {
        switch (i) {
            case 0: 
                personalInfo.firstName = prompt('Пожалуйста, введите ваше Имя:');
                break;
            case 1:
                personalInfo.secondName = prompt('Пожалуйста, введите вашу Фамилию:');
                break;
            case 2:
                personalInfo.gender = prompt('Пожалуйста, введите ваш Пол (М или Ж):');
                break;
            case 3:
                personalInfo.age = prompt('Пожалуйста, введите ваш Возраст:');
        }

         for (let j = 0; j < Infinity ; j++) {
            if (i === 0 && (personalInfo.firstName === null || personalInfo.firstName === '')) {
                alert('Введите корректное имя!');
                personalInfo.firstName = prompt('Пожалуйста, введите ваше имя:');    
            } else if (i === 0 && !(personalInfo.firstName === null || personalInfo.firstName === '')) {
                break;
            }
            
            if (i === 1 && (personalInfo.secondName === null || personalInfo.secondName === '')) {
                alert('Введите корректную фамилию!');
                personalInfo.secondName = prompt('Пожалуйста, введите вашу Фамилию:');
            } else if (i === 1 && !(personalInfo.secondName === null || personalInfo.secondName === '')) {
                break;
            }

            if (i === 2 && !(personalInfo.gender.toUpperCase() === 'М' || personalInfo.gender.toUpperCase() === 'Ж')) {
                alert('Введите корректный пол!');
                personalInfo.gender = prompt('Пожалуйста, введите ваш Пол (М или Ж):');               
            } else if (i === 2 && ( personalInfo.gender.toUpperCase() === 'М' || personalInfo.gender.toUpperCase() === 'Ж')) {
                break;
            }

            if (i === 3 && (personalInfo.age <= 0 || personalInfo.age === null || personalInfo.age === '' || isNaN(parseInt(personalInfo.age)))) {
                alert('Введите корректный возраст!');
                personalInfo.age = prompt('Пожалуйста, введите ваш Возраст:');
            } else if (i === 3 && ((personalInfo.age >= 63 && personalInfo.gender === 'М') || (personalInfo.age >= 55 && personalInfo.gender === 'Ж'))) {
                personalInfo.status = 'Да';
                break; 
            } else if (i === 3 && !((personalInfo.age >= 63 && personalInfo.gender === 'М') || (personalInfo.age >= 55 && personalInfo.gender === 'Ж'))) {
                personalInfo.status = 'Нет';
                break;
            }
        }
    }

    alert(`Полное имя: ${personalInfo.firstName} ${personalInfo.secondName}\n
            Пол: ${personalInfo.gender.toUpperCase()}\n
            На пенсии: ${personalInfo.status}`);

})();