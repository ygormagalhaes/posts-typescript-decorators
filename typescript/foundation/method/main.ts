function LogMethod(
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}

class MethodDemoClass {
    @LogMethod
    public foo() {
        // do nothing
    }
}
const methodDemo = new MethodDemoClass();
