## call，apply方法
在JavaScript中，我们经常使用的两种方法来改变this的指向，来简化代码的复杂度。这两种方法就是call（）和apply（）方法。

### 那我们如何使用呢

#### call（）
它的第一个参数是改变this的指向，第二个参数是需要传的参数。

举个例子啊

```
    function Person(name, age,height)
    {

        this.name=name;

        this.age=age;

        this.height=height;

    }

    function Student(name,age,height,sex,grade)
    {

        Person.call(this,name,age,height);//将Person的参数传给Student

        this.sex=sex;

        this.grade=grade;
    }

    var student=new Student("张三",18,180,"男",88);

```
仔细看看这个例子。使用了call（）方法，将Person中的name，age，height参数传给了Student,改变了它的this指向。

注意哦call（）方法的第二个值可以传多个参数，但是实参必须要按照形参的个数和顺序进行传参哦。不然就失败啦！

####  apply（）方法
apply()方法改变this指向，第二个值只能传一个实参且是数组。

举个例子啊
```
    function Person(name, age,height){

        this.name=name;

        this.age=age;

        this.height=height;

    }

    function Student(name,age,height,sex,grade){

        Person.apply(this,[name,age,height]);

        this.sex=sex;

        this.grade=grade;}

    var student= new Student("张三",18,180,"男",88);

```
注意了在apply方法的第二参数必须是数组哦，不然就会传参失败啦。

