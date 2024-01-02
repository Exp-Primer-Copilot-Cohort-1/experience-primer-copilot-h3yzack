function skillsMember() {
    var skills = {
        name: 'John',
        age: 30,
        skills: ['JS', 'CSS', 'HTML'],
        salary: 1000,
        showSalary: function () {
            alert(this.salary);
        },
        addSkill: function (skill) {
            this.skills.push(skill);
        }
    };
    return skills;
}