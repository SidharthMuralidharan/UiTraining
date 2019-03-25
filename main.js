function Employee(a, b, c, d) {
    var id = a;
    var name = b;
    var basicPay = c;
    var grade = d;

    this.setId = function (a) {
        if (isNaN(parseInt(a))) {
            id = a;
        }
    }
    this.getId = function () {
        return id;
    }
    this.setName = function (b) {
        if (typeof(b)=='string') {
            name = b;
        }
    }
    this.getName = function () {
        return name;
    }
    this.setBasicPay = function (c) {
        if (isNaN(parseInt(c))) {
            basicPay = c;
        }
    }
    this.getBasicPay = function () {
        return basicPay;
    }
    this.setGrade = function (d) {
        if (typeof(d)=='string') {
            grade = d;
        }
    }
    this.getGrade = function () {
        return grade;
    }

    this.getAllowance = function () {
        var percent;
        if (this.getGrade() == 'A') {
            percent = 25;
        }
        else if (this.getGrade() == 'B') {
            percent = 18;
        }
        else if (this.getGrade() == 'C') {
            percent = 15;
        }

        //return (this.getBasicPay() + ((this.getBasicPay() * percent) / 100));
        return (this.getBasicPay() * percent) / 100;
    }

    this.getTax = function () {
        return this.getBasicPay() * 0.1;
    }
    this.getNetSalary = function () {
        return ((this.getBasicPay() + this.getAllowance()) - this.getTax());
    }
}

var eId,ename,eBPay,eAllow,eTax,eNetSal;

function fetchEmployeeDetails() {
    var id = parseInt(document.forms[0].elements[0].value);
    var name = document.forms[0].elements[1].value;
    var basicPay = parseInt(document.forms[0].elements[2].value);
    var grade = document.forms[0].elements[3].value;

    var empObj = new Employee(id, name, basicPay, grade);

    if (isNaN(id) || isNaN(basicPay) || typeof (name) != 'string' || typeof (grade) != 'string') {
        alert('Invalid values')
    } else {
        empObj.setId(id);
        empObj.setName(name);
        empObj.setBasicPay(basicPay);
        empObj.setGrade(grade);
        this.eId = empObj.getId();
        this.ename = empObj.getName();
        this.eBPay = empObj.getBasicPay();
        this.eAllow = empObj.getAllowance();
        this.eTax = empObj.getTax();
        this.eNetSal = empObj.getNetSalary();

        formtableDatas();
    }
}
function formtableDatas() {
    document.getElementById('idValue').innerText = this.eId;
    document.getElementById('nameValue').innerText = this.ename;
    document.getElementById('basicPayValue').innerText = this.eBPay
    document.getElementById('allowanceValue').innerText = this.eAllow
    document.getElementById('taxValue').innerText = this.eTax
    document.getElementById('netSalaryValue').innerText = this.eNetSal;
}  