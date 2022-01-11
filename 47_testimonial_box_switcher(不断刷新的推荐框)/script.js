const testimonials = [
    {
        name: "Assembly Language",
        position: '嵌入式设备、驱动程序、实时应用、核心算法等',
        photo: "https://t00img.yangkeduo.com/goods/images/2021-05-05/e3c8b51e-5d8a-4e56-9b13-55256bcfa9d2.jpeg",
        text: "汇编语言， 即第二代计算机语言，用一些容易理解和记忆的字母，单词来代替一个特定的指令，比如：用“ADD”代表数字逻辑上的加减，“ MOV”代表数据传递等等，通过这种方法，人们很容易去阅读已经完成的程序或者理解程序正在执行的功能，对现有程序的bug修复以及运营维护都变得更加简单方便。"
    },
    {
        name: "C - 丹尼斯·里奇",
        position: "操作系统、嵌入式领域、数据库、服务器、单片机、编译器",
        photo: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.wenkunet.com%2FFileUpload%2Fueditor_s%2Fupload%2F2020-3%2F26%2Fd_AazdkAgmFDC3IAymgOnRHzKi4.jpg&refer=http%3A%2F%2Fwww.wenkunet.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644326871&t=bcff6545678bfe39f35b6094cbec777e",
        text: "C语言是一门面向过程的、抽象化的通用程序设计语言，广泛应用于底层开发。C语言能以简易的方式编译、处理低级存储器。C语言是仅产生少量的机器语言以及不需要任何运行环境支持便能运行的高效率程序设计语言。尽管C语言提供了许多低级处理的功能，但仍然保持着跨平台的特性，以一个标准规格写出的C语言程序可在包括类似嵌入式处理器以及超级计算机等作业平台的许多计算机平台上进行编译。"
    },
    {
        name: "C++ - 本贾尼·斯特劳斯特卢普",
        position: "桌面软件、操作系统、图形处理、游戏、网站、搜索引擎、数据库",
        photo: "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/baike/w%3D268%3Bg%3D0/sign=4229c9d93912b31bc76cca2fbe235147/9c16fdfaaf51f3de852becfa94eef01f3b297996.jpg",
        text: "C++是C语言的继承，它既可以进行C语言的过程化程序设计，又可以进行以抽象数据类型为特点的基于对象的程序设计，还可以进行以继承和多态为特点的面向对象的程序设计。C++擅长面向对象程序设计的同时，还可以进行基于过程的程序设计，因而C++就适应的问题规模而论，大小由之"
    },
    {
        name: "Java - 詹姆斯·高斯林",
        position: "移动（Android）应用、网站、嵌入式领域、大数据技术、科学应用等",
        photo: "https://tse1-mm.cn.bing.net/th/id/R-C.d1bc3da17086a9829d35d3dca16ed2a9?rik=issKtXIKUY4Paw&riu=http%3a%2f%2fwww.xetlab.com%2f2019%2f05%2f03%2fJava+vs+Python%ef%bc%8c%e8%b0%81%e8%83%bd%e8%83%9c%e5%87%ba%ef%bc%9f%2fjava.jpg&ehk=0CESMObGrPB91ZLCP4YsLZhUauXzKxkBuFb6ln7mUdw%3d&risl=&pid=ImgRaw&r=0",
        text: "Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程"
    },
    {
        name: "C# - 安德斯·海尔斯伯格",
        position: "网站，桌面应用程序，后端接口，游戏，android，ios，wince，嵌入式设备等",
        photo: "https://tse1-mm.cn.bing.net/th/id/R-C.f814c237ffe97be81c3dc0d835cae945?rik=i0JzL62%2bhGH6Wg&riu=http%3a%2f%2fimg2.diglog.com%2fimg%2f2020%2f9%2f37e73390380905d523f6f47d89a40371.jpg&ehk=ehEY1AAlganqPPN6Exx6hsNdDQxluhRhsbYGdjQkfLU%3d&risl=&pid=ImgRaw&r=0",
        text: "C#是由C和C++衍生出来的一种安全的、稳定的、简单的、优雅的面向对象编程语言。它在继承C和C++强大功能的同时去掉了一些它们的复杂特性（例如没有宏以及不允许多重继承）。C#综合了VB简单的可视化操作和C++的高运行效率，以其强大的操作能力、优雅的语法风格、创新的语言特性和便捷的面向组件编程的支持成为.NET开发的首选语言。"
    },
    {
        name: "Go - Google",
        position: "云计算，微服务，区块链，游戏服务器等",
        photo: "https://www.jigsawplanet.com/John1333/Google-G-Logo-svg?rc=face",
        text: "Go的语法接近C语言，但对于变量的声明有所不同。Go支持垃圾回收功能。Go的并行模型是以东尼·霍尔的通信顺序进程（CSP）为基础，采取类似模型的其他语言包括Occam和Limbo，但它也具有Pi运算的特征，比如通道传输。在1.8版本中开放插件（Plugin）的支持，这意味着现在能从Go中动态加载部分函数。"
    },
    {
        name: "Rust - Mozilla",
        position: "云计算，微服务，区块链，游戏服务器，驱动等",
        photo: "https://i0.wp.com/www.kingoffightergame.com/wp-content/uploads/2020/06/Mozilla-Firefox-Portable-Free-Download-Full-Version.jpg",
        text: "Rust是一门系统编程语言 [1]  ，专注于安全 [2]  ，尤其是并发安全，支持函数式和命令式以及泛型等编程范式的多范式语言。Rust在语法上和C++类似 [3]  ，但是设计者想要在保证性能的同时提供更好的内存安全。 Rust最初是由Mozilla研究院的Graydon Hoare设计创造，然后在Dave Herman, Brendan Eich以及很多其他人的贡献下逐步完善的。 [4]  Rust的设计者们通过在研发Servo网站浏览器布局引擎过程中积累的经验优化了Rust语言和Rust编译器。 [5] "
    }
]

const testimonialContainer = document.querySelector('.testimonial-container')
const testnimonial = testimonialContainer.querySelector('.testimonial')
const userImage = testimonialContainer.querySelector('.user-image')
const userName = testimonialContainer.querySelector('.username')
const role = testimonialContainer.querySelector('.role')

let index = 0

// 每隔10s切换 文本,推荐,头像,姓名
function updateTestimonial() {
    const { name, position, photo, text } = testimonials[index]

    testnimonial.innerText = text
    userImage.src = photo
    userName.innerText = name
    role.innerText = position

    index++

    if (index > testimonials.length - 1)
        index = 0
}

setInterval(updateTestimonial, 10000)