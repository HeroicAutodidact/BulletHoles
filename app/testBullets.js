testBulletRoot =
new Bullet("Home",[
    new Bullet("Daddy1", [
        new Bullet("child1", []),
        new Bullet("child2", [])
    ]),
    new Bullet("Daddy2", [
        new Bullet("child3",[]),
        new Bullet("child4",[])
    ])
]);

daddy2 = testBulletRoot.children[1]
//  {
//     bContent: "Home",
//     bChildren: [
//         {
//             bContent: "Daddy1",
//             bChildren: [
//                 {
//                     bContent: "child1",
//                     bChildren: []
//                 },
//                 {
//                     bContent: "child2",
//                     bChildren: []
//                 }
//             ]
//         },
//         {
//             bContent: "Daddy2",
//             bChildren: [
//                 {
//                     bContent: "child2",
//                     bChildren: []
//                 },
//                 {
//                     bContent: "child3",
//                     bChildren: []
//                 }
//             ]
//         },
//     ]
// };