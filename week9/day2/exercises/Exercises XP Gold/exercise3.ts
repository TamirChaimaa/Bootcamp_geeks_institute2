class MathUtils {
    static PI : number = 3.14159

    static circumference (radius : number) : number {
        return 2 * MathUtils.PI * radius;
    }
}

const result = MathUtils.circumference(17)
console.log(result);
