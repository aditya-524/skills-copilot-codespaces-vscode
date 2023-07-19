function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 2000,
        bonus: 200,
        // Method
        getSalary: function () {
            return this.salary + this.bonus;
        },
        // Method
        getSkills: function () {
            return this.skills;
        }
    };
    // Member
    console.log(member);
    // Member name
    console.log(member.name);
    // Member age
    console.log(member.age);
    // Member skills
    console.log(member.skills);
    // Member salary
    console.log(member.salary);
    // Member bonus
    console.log(member.bonus);
    // Member getSalary
    console.log(member.getSalary());
    // Member getSkills
    console.log(member.getSkills());
}  