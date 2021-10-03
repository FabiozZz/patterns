class SimpleMembership{
    constructor(name) {
        this.name = name;
        this.coast = 50;
    }
}
class StandardMembership{
    constructor(name) {
        this.name = name;
        this.coast = 150;
    }
}
class PremiumMembership{
    constructor(name) {
        this.name = name;
        this.coast = 500;
    }
}

class MembershipFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }

    create(name,type='simple'){
        const Membership = MembershipFactory.list[type] || MembershipFactory.list.simple;
        const member = new Membership(name);
    }
}