var list = [];

function worker(name, lastname, age, job, salary){
	this.name=name;
	this.lastname=lastname;
	this.age=age;
	this.job=job;
	this.salary=salary;
	this.salary_bonus = this.salary*1.15;
	list.push(this);
};

var ivan = new worker("Иван", "Иванов", 33, "Менеджер", 15000);
var petr = new worker("Петр", "Петров", 55, "Продавец", 35000);
var vasya = new worker("Василий", "Карбовничий", 25, "Тунец", 1);
var vera = new worker("Вера", "Гладилова", 23, "Творец", 0);
	
function showSearch(obj) {
	var s = obj.find.value;
	var x;
	var m = false;
	console.log(list);
	for (x in list){
		if (list[x].lastname == s || list[x].name == s) {
			obj.lastname.value = list[x].lastname;
			obj.name.value = list[x].name;
			obj.age.value = list[x].age;
			obj.job.value = list[x].job;
			obj.salary.value = list[x].salary;
			m = true;
		}
	}
	if (m == false){
		alert ("Не найдено");
	}
};