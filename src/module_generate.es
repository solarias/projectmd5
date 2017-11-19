"use strict";
//import seedrandom = require("../../function/tool/seedrandom");
//생성 클래스
var generator = (function () {
    function generator() {
    }
    /*기본 메서드*/
    //MD5 생성기(seed로 활용)
    generator.prototype.toSeed = function (input) {
    };
    //Hash 생성기(1회 혹은 여러번 생성 가능)
    generator.prototype.toHash = function (repeat, seed) {
        //if (seed) var ran = seedrandom(seed);
        function generate() {
            var hash = "";
            if (seed) {
                while (1) {
                    hash += ran().toString(16).substring(2, 10);
                    if (hash.length >= 32)
                        break;
                }
                return hash;
            }
            else {
                while (1) {
                    hash += Math.random().toString(16).substring(2, 10);
                    if (hash.length >= 32)
                        break;
                }
                return hash;
            }
        }
        if (!repeat || repeat === 1) {
            //1회만 생성: string 반환
            return generate();
        }
        else {
            //정해둔 횟수만큼 생성: 묶어서 array 반환
            var arr = [];
            for (var i = 0; i < repeat; i++) {
                arr.push(generate());
            }
            return arr;
        }
    };
    //Card 생성기
    generator.prototype.toCard = function (hash) {
    };
    /*응용 메서도*/
    //덱 생성기(인풋 -> 해쉬 -> 덱)
    generator.prototype.generateDeck = function () {
    };
    //랜덤카드 생성기(무작위 해쉬 -> 카드)
    generator.prototype.generateRandomCard = function () {
    };
    return generator;
}());
//내보내기: generator
//export {generator};
//# sourceMappingURL=module_generate.js.map