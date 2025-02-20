/* @preserve skinview3d / MIT License / https://github.com/bs-community/skinview3d */ ! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).skinview3d = {})
}(this, (function(e) {
    "use strict";
    const t = 0,
        i = 1,
        n = 2,
        r = 0,
        a = 1,
        s = 2,
        o = 3,
        l = 100,
        c = 301,
        h = 302,
        u = 303,
        d = 306,
        p = 1e3,
        f = 1001,
        m = 1002,
        g = 1003,
        v = 1006,
        _ = 1008,
        x = 1009,
        y = 1014,
        M = 1015,
        b = 1016,
        S = 1020,
        w = 1023,
        T = 1026,
        E = 1027,
        A = 33776,
        C = 33777,
        L = 33778,
        P = 33779,
        R = 3e3,
        D = 3001,
        I = "srgb",
        N = "srgb-linear",
        z = 7680,
        O = 35044,
        U = "300 es",
        F = 1035;
    class B {
        addEventListener(e, t) {
            void 0 === this._listeners && (this._listeners = {});
            const i = this._listeners;
            void 0 === i[e] && (i[e] = []), -1 === i[e].indexOf(t) && i[e].push(t)
        }
        hasEventListener(e, t) {
            if (void 0 === this._listeners) return !1;
            const i = this._listeners;
            return void 0 !== i[e] && -1 !== i[e].indexOf(t)
        }
        removeEventListener(e, t) {
            if (void 0 === this._listeners) return;
            const i = this._listeners[e];
            if (void 0 !== i) {
                const e = i.indexOf(t); - 1 !== e && i.splice(e, 1)
            }
        }
        dispatchEvent(e) {
            if (void 0 === this._listeners) return;
            const t = this._listeners[e.type];
            if (void 0 !== t) {
                e.target = this;
                const i = t.slice(0);
                for (let t = 0, n = i.length; t < n; t++) i[t].call(this, e);
                e.target = null
            }
        }
    }
    const k = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"],
        H = Math.PI / 180,
        G = 180 / Math.PI;

    function V() {
        const e = 4294967295 * Math.random() | 0,
            t = 4294967295 * Math.random() | 0,
            i = 4294967295 * Math.random() | 0,
            n = 4294967295 * Math.random() | 0;
        return (k[255 & e] + k[e >> 8 & 255] + k[e >> 16 & 255] + k[e >> 24 & 255] + "-" + k[255 & t] + k[t >> 8 & 255] + "-" + k[t >> 16 & 15 | 64] + k[t >> 24 & 255] + "-" + k[63 & i | 128] + k[i >> 8 & 255] + "-" + k[i >> 16 & 255] + k[i >> 24 & 255] + k[255 & n] + k[n >> 8 & 255] + k[n >> 16 & 255] + k[n >> 24 & 255]).toLowerCase()
    }

    function W(e, t, i) {
        return Math.max(t, Math.min(i, e))
    }

    function j(e, t, i) {
        return (1 - i) * e + i * t
    }

    function q(e) {
        return 0 == (e & e - 1) && 0 !== e
    }

    function X(e) {
        return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))
    }
    class Y {
        constructor(e = 0, t = 0) {
            Y.prototype.isVector2 = !0, this.x = e, this.y = t
        }
        get width() {
            return this.x
        }
        set width(e) {
            this.x = e
        }
        get height() {
            return this.y
        }
        set height(e) {
            this.y = e
        }
        set(e, t) {
            return this.x = e, this.y = t, this
        }
        setScalar(e) {
            return this.x = e, this.y = e, this
        }
        setX(e) {
            return this.x = e, this
        }
        setY(e) {
            return this.y = e, this
        }
        setComponent(e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e)
            }
            return this
        }
        getComponent(e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + e)
            }
        }
        clone() {
            return new this.constructor(this.x, this.y)
        }
        copy(e) {
            return this.x = e.x, this.y = e.y, this
        }
        add(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
        }
        addScalar(e) {
            return this.x += e, this.y += e, this
        }
        addVectors(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this
        }
        addScaledVector(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this
        }
        sub(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
        }
        subScalar(e) {
            return this.x -= e, this.y -= e, this
        }
        subVectors(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this
        }
        multiply(e) {
            return this.x *= e.x, this.y *= e.y, this
        }
        multiplyScalar(e) {
            return this.x *= e, this.y *= e, this
        }
        divide(e) {
            return this.x /= e.x, this.y /= e.y, this
        }
        divideScalar(e) {
            return this.multiplyScalar(1 / e)
        }
        applyMatrix3(e) {
            const t = this.x,
                i = this.y,
                n = e.elements;
            return this.x = n[0] * t + n[3] * i + n[6], this.y = n[1] * t + n[4] * i + n[7], this
        }
        min(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
        }
        max(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
        }
        clamp(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
        }
        clampScalar(e, t) {
            return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this
        }
        clampLength(e, t) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)))
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this
        }
        dot(e) {
            return this.x * e.x + this.y * e.y
        }
        cross(e) {
            return this.x * e.y - this.y * e.x
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI
        }
        distanceTo(e) {
            return Math.sqrt(this.distanceToSquared(e))
        }
        distanceToSquared(e) {
            const t = this.x - e.x,
                i = this.y - e.y;
            return t * t + i * i
        }
        manhattanDistanceTo(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
        }
        setLength(e) {
            return this.normalize().multiplyScalar(e)
        }
        lerp(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
        }
        lerpVectors(e, t, i) {
            return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this
        }
        equals(e) {
            return e.x === this.x && e.y === this.y
        }
        fromArray(e, t = 0) {
            return this.x = e[t], this.y = e[t + 1], this
        }
        toArray(e = [], t = 0) {
            return e[t] = this.x, e[t + 1] = this.y, e
        }
        fromBufferAttribute(e, t, i) {
            return void 0 !== i && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this
        }
        rotateAround(e, t) {
            const i = Math.cos(t),
                n = Math.sin(t),
                r = this.x - e.x,
                a = this.y - e.y;
            return this.x = r * i - a * n + e.x, this.y = r * n + a * i + e.y, this
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this
        }*[Symbol.iterator]() {
            yield this.x, yield this.y
        }
    }
    class Z {
        constructor() {
            Z.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
        }
        set(e, t, i, n, r, a, s, o, l) {
            const c = this.elements;
            return c[0] = e, c[1] = n, c[2] = s, c[3] = t, c[4] = r, c[5] = o, c[6] = i, c[7] = a, c[8] = l, this
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        }
        copy(e) {
            const t = this.elements,
                i = e.elements;
            return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], this
        }
        extractBasis(e, t, i) {
            return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this
        }
        setFromMatrix4(e) {
            const t = e.elements;
            return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
        }
        multiply(e) {
            return this.multiplyMatrices(this, e)
        }
        premultiply(e) {
            return this.multiplyMatrices(e, this)
        }
        multiplyMatrices(e, t) {
            const i = e.elements,
                n = t.elements,
                r = this.elements,
                a = i[0],
                s = i[3],
                o = i[6],
                l = i[1],
                c = i[4],
                h = i[7],
                u = i[2],
                d = i[5],
                p = i[8],
                f = n[0],
                m = n[3],
                g = n[6],
                v = n[1],
                _ = n[4],
                x = n[7],
                y = n[2],
                M = n[5],
                b = n[8];
            return r[0] = a * f + s * v + o * y, r[3] = a * m + s * _ + o * M, r[6] = a * g + s * x + o * b, r[1] = l * f + c * v + h * y, r[4] = l * m + c * _ + h * M, r[7] = l * g + c * x + h * b, r[2] = u * f + d * v + p * y, r[5] = u * m + d * _ + p * M, r[8] = u * g + d * x + p * b, this
        }
        multiplyScalar(e) {
            const t = this.elements;
            return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
        }
        determinant() {
            const e = this.elements,
                t = e[0],
                i = e[1],
                n = e[2],
                r = e[3],
                a = e[4],
                s = e[5],
                o = e[6],
                l = e[7],
                c = e[8];
            return t * a * c - t * s * l - i * r * c + i * s * o + n * r * l - n * a * o
        }
        invert() {
            const e = this.elements,
                t = e[0],
                i = e[1],
                n = e[2],
                r = e[3],
                a = e[4],
                s = e[5],
                o = e[6],
                l = e[7],
                c = e[8],
                h = c * a - s * l,
                u = s * o - c * r,
                d = l * r - a * o,
                p = t * h + i * u + n * d;
            if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const f = 1 / p;
            return e[0] = h * f, e[1] = (n * l - c * i) * f, e[2] = (s * i - n * a) * f, e[3] = u * f, e[4] = (c * t - n * o) * f, e[5] = (n * r - s * t) * f, e[6] = d * f, e[7] = (i * o - l * t) * f, e[8] = (a * t - i * r) * f, this
        }
        transpose() {
            let e;
            const t = this.elements;
            return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
        }
        getNormalMatrix(e) {
            return this.setFromMatrix4(e).invert().transpose()
        }
        transposeIntoArray(e) {
            const t = this.elements;
            return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
        }
        setUvTransform(e, t, i, n, r, a, s) {
            const o = Math.cos(r),
                l = Math.sin(r);
            return this.set(i * o, i * l, -i * (o * a + l * s) + a + e, -n * l, n * o, -n * (-l * a + o * s) + s + t, 0, 0, 1), this
        }
        scale(e, t) {
            const i = this.elements;
            return i[0] *= e, i[3] *= e, i[6] *= e, i[1] *= t, i[4] *= t, i[7] *= t, this
        }
        rotate(e) {
            const t = Math.cos(e),
                i = Math.sin(e),
                n = this.elements,
                r = n[0],
                a = n[3],
                s = n[6],
                o = n[1],
                l = n[4],
                c = n[7];
            return n[0] = t * r + i * o, n[3] = t * a + i * l, n[6] = t * s + i * c, n[1] = -i * r + t * o, n[4] = -i * a + t * l, n[7] = -i * s + t * c, this
        }
        translate(e, t) {
            const i = this.elements;
            return i[0] += e * i[2], i[3] += e * i[5], i[6] += e * i[8], i[1] += t * i[2], i[4] += t * i[5], i[7] += t * i[8], this
        }
        equals(e) {
            const t = this.elements,
                i = e.elements;
            for (let e = 0; e < 9; e++)
                if (t[e] !== i[e]) return !1;
            return !0
        }
        fromArray(e, t = 0) {
            for (let i = 0; i < 9; i++) this.elements[i] = e[i + t];
            return this
        }
        toArray(e = [], t = 0) {
            const i = this.elements;
            return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e
        }
        clone() {
            return (new this.constructor).fromArray(this.elements)
        }
    }

    function J(e) {
        for (let t = e.length - 1; t >= 0; --t)
            if (e[t] > 65535) return !0;
        return !1
    }

    function K(e) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", e)
    }

    function Q(e) {
        return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4)
    }

    function $(e) {
        return e < .0031308 ? 12.92 * e : 1.055 * Math.pow(e, .41666) - .055
    }
    const ee = {
            [I]: {
                [N]: Q
            },
            [N]: {
                [I]: $
            }
        },
        te = {
            legacyMode: !0,
            get workingColorSpace() {
                return N
            },
            set workingColorSpace(e) {
                console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")
            },
            convert: function(e, t, i) {
                if (this.legacyMode || t === i || !t || !i) return e;
                if (ee[t] && void 0 !== ee[t][i]) {
                    const n = ee[t][i];
                    return e.r = n(e.r), e.g = n(e.g), e.b = n(e.b), e
                }
                throw new Error("Unsupported color space conversion.")
            },
            fromWorkingColorSpace: function(e, t) {
                return this.convert(e, this.workingColorSpace, t)
            },
            toWorkingColorSpace: function(e, t) {
                return this.convert(e, t, this.workingColorSpace)
            }
        },
        ie = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        },
        ne = {
            r: 0,
            g: 0,
            b: 0
        },
        re = {
            h: 0,
            s: 0,
            l: 0
        },
        ae = {
            h: 0,
            s: 0,
            l: 0
        };

    function se(e, t, i) {
        return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + 6 * (t - e) * i : i < .5 ? t : i < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - i) : e
    }

    function oe(e, t) {
        return t.r = e.r, t.g = e.g, t.b = e.b, t
    }
    class le {
        constructor(e, t, i) {
            return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, void 0 === t && void 0 === i ? this.set(e) : this.setRGB(e, t, i)
        }
        set(e) {
            return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
        }
        setScalar(e) {
            return this.r = e, this.g = e, this.b = e, this
        }
        setHex(e, t = "srgb") {
            return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, te.toWorkingColorSpace(this, t), this
        }
        setRGB(e, t, i, n = "srgb-linear") {
            return this.r = e, this.g = t, this.b = i, te.toWorkingColorSpace(this, n), this
        }
        setHSL(e, t, i, n = "srgb-linear") {
            var r;
            if (e = (e % (r = 1) + r) % r, t = W(t, 0, 1), i = W(i, 0, 1), 0 === t) this.r = this.g = this.b = i;
            else {
                const n = i <= .5 ? i * (1 + t) : i + t - i * t,
                    r = 2 * i - n;
                this.r = se(r, n, e + 1 / 3), this.g = se(r, n, e), this.b = se(r, n, e - 1 / 3)
            }
            return te.toWorkingColorSpace(this, n), this
        }
        setStyle(e, t = "srgb") {
            function i(t) {
                void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
            }
            let n;
            if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
                let e;
                const r = n[1],
                    a = n[2];
                switch (r) {
                    case "rgb":
                    case "rgba":
                        if (e = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(e[1], 10)) / 255, this.g = Math.min(255, parseInt(e[2], 10)) / 255, this.b = Math.min(255, parseInt(e[3], 10)) / 255, te.toWorkingColorSpace(this, t), i(e[4]), this;
                        if (e = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(e[1], 10)) / 100, this.g = Math.min(100, parseInt(e[2], 10)) / 100, this.b = Math.min(100, parseInt(e[3], 10)) / 100, te.toWorkingColorSpace(this, t), i(e[4]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (e = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
                            const n = parseFloat(e[1]) / 360,
                                r = parseInt(e[2], 10) / 100,
                                a = parseInt(e[3], 10) / 100;
                            return i(e[4]), this.setHSL(n, r, a, t)
                        }
                }
            } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
                const e = n[1],
                    i = e.length;
                if (3 === i) return this.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255, this.g = parseInt(e.charAt(1) + e.charAt(1), 16) / 255, this.b = parseInt(e.charAt(2) + e.charAt(2), 16) / 255, te.toWorkingColorSpace(this, t), this;
                if (6 === i) return this.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255, this.g = parseInt(e.charAt(2) + e.charAt(3), 16) / 255, this.b = parseInt(e.charAt(4) + e.charAt(5), 16) / 255, te.toWorkingColorSpace(this, t), this
            }
            return e && e.length > 0 ? this.setColorName(e, t) : this
        }
        setColorName(e, t = "srgb") {
            const i = ie[e.toLowerCase()];
            return void 0 !== i ? this.setHex(i, t) : console.warn("THREE.Color: Unknown color " + e), this
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b)
        }
        copy(e) {
            return this.r = e.r, this.g = e.g, this.b = e.b, this
        }
        copySRGBToLinear(e) {
            return this.r = Q(e.r), this.g = Q(e.g), this.b = Q(e.b), this
        }
        copyLinearToSRGB(e) {
            return this.r = $(e.r), this.g = $(e.g), this.b = $(e.b), this
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this
        }
        getHex(e = "srgb") {
            return te.fromWorkingColorSpace(oe(this, ne), e), W(255 * ne.r, 0, 255) << 16 ^ W(255 * ne.g, 0, 255) << 8 ^ W(255 * ne.b, 0, 255) << 0
        }
        getHexString(e = "srgb") {
            return ("000000" + this.getHex(e).toString(16)).slice(-6)
        }
        getHSL(e, t = "srgb-linear") {
            te.fromWorkingColorSpace(oe(this, ne), t);
            const i = ne.r,
                n = ne.g,
                r = ne.b,
                a = Math.max(i, n, r),
                s = Math.min(i, n, r);
            let o, l;
            const c = (s + a) / 2;
            if (s === a) o = 0, l = 0;
            else {
                const e = a - s;
                switch (l = c <= .5 ? e / (a + s) : e / (2 - a - s), a) {
                    case i:
                        o = (n - r) / e + (n < r ? 6 : 0);
                        break;
                    case n:
                        o = (r - i) / e + 2;
                        break;
                    case r:
                        o = (i - n) / e + 4
                }
                o /= 6
            }
            return e.h = o, e.s = l, e.l = c, e
        }
        getRGB(e, t = "srgb-linear") {
            return te.fromWorkingColorSpace(oe(this, ne), t), e.r = ne.r, e.g = ne.g, e.b = ne.b, e
        }
        getStyle(e = "srgb") {
            return te.fromWorkingColorSpace(oe(this, ne), e), e !== I ? `color(${e} ${ne.r} ${ne.g} ${ne.b})` : `rgb(${255*ne.r|0},${255*ne.g|0},${255*ne.b|0})`
        }
        offsetHSL(e, t, i) {
            return this.getHSL(re), re.h += e, re.s += t, re.l += i, this.setHSL(re.h, re.s, re.l), this
        }
        add(e) {
            return this.r += e.r, this.g += e.g, this.b += e.b, this
        }
        addColors(e, t) {
            return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
        }
        addScalar(e) {
            return this.r += e, this.g += e, this.b += e, this
        }
        sub(e) {
            return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
        }
        multiply(e) {
            return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
        }
        multiplyScalar(e) {
            return this.r *= e, this.g *= e, this.b *= e, this
        }
        lerp(e, t) {
            return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
        }
        lerpColors(e, t, i) {
            return this.r = e.r + (t.r - e.r) * i, this.g = e.g + (t.g - e.g) * i, this.b = e.b + (t.b - e.b) * i, this
        }
        lerpHSL(e, t) {
            this.getHSL(re), e.getHSL(ae);
            const i = j(re.h, ae.h, t),
                n = j(re.s, ae.s, t),
                r = j(re.l, ae.l, t);
            return this.setHSL(i, n, r), this
        }
        equals(e) {
            return e.r === this.r && e.g === this.g && e.b === this.b
        }
        fromArray(e, t = 0) {
            return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
        }
        toArray(e = [], t = 0) {
            return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
        }
        fromBufferAttribute(e, t) {
            return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), !0 === e.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this
        }
        toJSON() {
            return this.getHex()
        }*[Symbol.iterator]() {
            yield this.r, yield this.g, yield this.b
        }
    }
    let ce;
    le.NAMES = ie;
    class he {
        static getDataURL(e) {
            if (/^data:/i.test(e.src)) return e.src;
            if ("undefined" == typeof HTMLCanvasElement) return e.src;
            let t;
            if (e instanceof HTMLCanvasElement) t = e;
            else {
                void 0 === ce && (ce = K("canvas")), ce.width = e.width, ce.height = e.height;
                const i = ce.getContext("2d");
                e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height), t = ce
            }
            return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
        }
        static sRGBToLinear(e) {
            if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap) {
                const t = K("canvas");
                t.width = e.width, t.height = e.height;
                const i = t.getContext("2d");
                i.drawImage(e, 0, 0, e.width, e.height);
                const n = i.getImageData(0, 0, e.width, e.height),
                    r = n.data;
                for (let e = 0; e < r.length; e++) r[e] = 255 * Q(r[e] / 255);
                return i.putImageData(n, 0, 0), t
            }
            if (e.data) {
                const t = e.data.slice(0);
                for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(255 * Q(t[e] / 255)) : t[e] = Q(t[e]);
                return {
                    data: t,
                    width: e.width,
                    height: e.height
                }
            }
            return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e
        }
    }
    class ue {
        constructor(e = null) {
            this.isSource = !0, this.uuid = V(), this.data = e, this.version = 0
        }
        set needsUpdate(e) {
            !0 === e && this.version++
        }
        toJSON(e) {
            const t = void 0 === e || "string" == typeof e;
            if (!t && void 0 !== e.images[this.uuid]) return e.images[this.uuid];
            const i = {
                    uuid: this.uuid,
                    url: ""
                },
                n = this.data;
            if (null !== n) {
                let e;
                if (Array.isArray(n)) {
                    e = [];
                    for (let t = 0, i = n.length; t < i; t++) n[t].isDataTexture ? e.push(de(n[t].image)) : e.push(de(n[t]))
                } else e = de(n);
                i.url = e
            }
            return t || (e.images[this.uuid] = i), i
        }
    }

    function de(e) {
        return "undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap ? he.getDataURL(e) : e.data ? {
            data: Array.from(e.data),
            width: e.width,
            height: e.height,
            type: e.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
    }
    let pe = 0;
    class fe extends B {
        constructor(e = fe.DEFAULT_IMAGE, t = fe.DEFAULT_MAPPING, i = 1001, n = 1001, r = 1006, a = 1008, s = 1023, o = 1009, l = 1, c = 3e3) {
            super(), this.isTexture = !0, Object.defineProperty(this, "id", {
                value: pe++
            }), this.uuid = V(), this.name = "", this.source = new ue(e), this.mipmaps = [], this.mapping = t, this.wrapS = i, this.wrapT = n, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = o, this.offset = new Y(0, 0), this.repeat = new Y(1, 1), this.center = new Y(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Z, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1
        }
        get image() {
            return this.source.data
        }
        set image(e) {
            this.source.data = e
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(e) {
            return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this
        }
        toJSON(e) {
            const t = void 0 === e || "string" == typeof e;
            if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
            const i = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                image: this.source.toJSON(e).uuid,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            return "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), t || (e.textures[this.uuid] = i), i
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
        transformUv(e) {
            if (300 !== this.mapping) return e;
            if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
                case p:
                    e.x = e.x - Math.floor(e.x);
                    break;
                case f:
                    e.x = e.x < 0 ? 0 : 1;
                    break;
                case m:
                    1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
            }
            if (e.y < 0 || e.y > 1) switch (this.wrapT) {
                case p:
                    e.y = e.y - Math.floor(e.y);
                    break;
                case f:
                    e.y = e.y < 0 ? 0 : 1;
                    break;
                case m:
                    1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
            }
            return this.flipY && (e.y = 1 - e.y), e
        }
        set needsUpdate(e) {
            !0 === e && (this.version++, this.source.needsUpdate = !0)
        }
    }
    fe.DEFAULT_IMAGE = null, fe.DEFAULT_MAPPING = 300;
    class me {
        constructor(e = 0, t = 0, i = 0, n = 1) {
            me.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = i, this.w = n
        }
        get width() {
            return this.z
        }
        set width(e) {
            this.z = e
        }
        get height() {
            return this.w
        }
        set height(e) {
            this.w = e
        }
        set(e, t, i, n) {
            return this.x = e, this.y = t, this.z = i, this.w = n, this
        }
        setScalar(e) {
            return this.x = e, this.y = e, this.z = e, this.w = e, this
        }
        setX(e) {
            return this.x = e, this
        }
        setY(e) {
            return this.y = e, this
        }
        setZ(e) {
            return this.z = e, this
        }
        setW(e) {
            return this.w = e, this
        }
        setComponent(e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                case 3:
                    this.w = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e)
            }
            return this
        }
        getComponent(e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + e)
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z, this.w)
        }
        copy(e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
        }
        add(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
        }
        addScalar(e) {
            return this.x += e, this.y += e, this.z += e, this.w += e, this
        }
        addVectors(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
        }
        addScaledVector(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
        }
        sub(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
        }
        subScalar(e) {
            return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
        }
        subVectors(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
        }
        multiply(e) {
            return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this
        }
        multiplyScalar(e) {
            return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
        }
        applyMatrix4(e) {
            const t = this.x,
                i = this.y,
                n = this.z,
                r = this.w,
                a = e.elements;
            return this.x = a[0] * t + a[4] * i + a[8] * n + a[12] * r, this.y = a[1] * t + a[5] * i + a[9] * n + a[13] * r, this.z = a[2] * t + a[6] * i + a[10] * n + a[14] * r, this.w = a[3] * t + a[7] * i + a[11] * n + a[15] * r, this
        }
        divideScalar(e) {
            return this.multiplyScalar(1 / e)
        }
        setAxisAngleFromQuaternion(e) {
            this.w = 2 * Math.acos(e.w);
            const t = Math.sqrt(1 - e.w * e.w);
            return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
        }
        setAxisAngleFromRotationMatrix(e) {
            let t, i, n, r;
            const a = .01,
                s = .1,
                o = e.elements,
                l = o[0],
                c = o[4],
                h = o[8],
                u = o[1],
                d = o[5],
                p = o[9],
                f = o[2],
                m = o[6],
                g = o[10];
            if (Math.abs(c - u) < a && Math.abs(h - f) < a && Math.abs(p - m) < a) {
                if (Math.abs(c + u) < s && Math.abs(h + f) < s && Math.abs(p + m) < s && Math.abs(l + d + g - 3) < s) return this.set(1, 0, 0, 0), this;
                t = Math.PI;
                const e = (l + 1) / 2,
                    o = (d + 1) / 2,
                    v = (g + 1) / 2,
                    _ = (c + u) / 4,
                    x = (h + f) / 4,
                    y = (p + m) / 4;
                return e > o && e > v ? e < a ? (i = 0, n = .707106781, r = .707106781) : (i = Math.sqrt(e), n = _ / i, r = x / i) : o > v ? o < a ? (i = .707106781, n = 0, r = .707106781) : (n = Math.sqrt(o), i = _ / n, r = y / n) : v < a ? (i = .707106781, n = .707106781, r = 0) : (r = Math.sqrt(v), i = x / r, n = y / r), this.set(i, n, r, t), this
            }
            let v = Math.sqrt((m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c));
            return Math.abs(v) < .001 && (v = 1), this.x = (m - p) / v, this.y = (h - f) / v, this.z = (u - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this
        }
        min(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
        }
        max(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
        }
        clamp(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
        }
        clampScalar(e, t) {
            return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this
        }
        clampLength(e, t) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)))
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        }
        dot(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        setLength(e) {
            return this.normalize().multiplyScalar(e)
        }
        lerp(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
        }
        lerpVectors(e, t, i) {
            return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this.w = e.w + (t.w - e.w) * i, this
        }
        equals(e) {
            return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
        }
        fromArray(e, t = 0) {
            return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
        }
        toArray(e = [], t = 0) {
            return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
        }
        fromBufferAttribute(e, t, i) {
            return void 0 !== i && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
        }*[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z, yield this.w
        }
    }
    class ge extends B {
        constructor(e, t, i = {}) {
            super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new me(0, 0, e, t), this.scissorTest = !1, this.viewport = new me(0, 0, e, t);
            const n = {
                width: e,
                height: t,
                depth: 1
            };
            this.texture = new fe(n, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== i.generateMipmaps && i.generateMipmaps, this.texture.internalFormat = void 0 !== i.internalFormat ? i.internalFormat : null, this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : v, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 !== i.stencilBuffer && i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null, this.samples = void 0 !== i.samples ? i.samples : 0
        }
        setSize(e, t, i = 1) {
            this.width === e && this.height === t && this.depth === i || (this.width = e, this.height = t, this.depth = i, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = i, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(e) {
            this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
            const t = Object.assign({}, e.texture.image);
            return this.texture.source = new ue(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, null !== e.depthTexture && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }
    class ve extends fe {
        constructor(e = null, t = 1, i = 1, n = 1) {
            super(null), this.isDataArrayTexture = !0, this.image = {
                data: e,
                width: t,
                height: i,
                depth: n
            }, this.magFilter = g, this.minFilter = g, this.wrapR = f, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
        }
    }
    class _e extends fe {
        constructor(e = null, t = 1, i = 1, n = 1) {
            super(null), this.isData3DTexture = !0, this.image = {
                data: e,
                width: t,
                height: i,
                depth: n
            }, this.magFilter = g, this.minFilter = g, this.wrapR = f, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
        }
    }
    class xe {
        constructor(e = 0, t = 0, i = 0, n = 1) {
            this.isQuaternion = !0, this._x = e, this._y = t, this._z = i, this._w = n
        }
        static slerp(e, t, i, n) {
            return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), i.slerpQuaternions(e, t, n)
        }
        static slerpFlat(e, t, i, n, r, a, s) {
            let o = i[n + 0],
                l = i[n + 1],
                c = i[n + 2],
                h = i[n + 3];
            const u = r[a + 0],
                d = r[a + 1],
                p = r[a + 2],
                f = r[a + 3];
            if (0 === s) return e[t + 0] = o, e[t + 1] = l, e[t + 2] = c, void(e[t + 3] = h);
            if (1 === s) return e[t + 0] = u, e[t + 1] = d, e[t + 2] = p, void(e[t + 3] = f);
            if (h !== f || o !== u || l !== d || c !== p) {
                let e = 1 - s;
                const t = o * u + l * d + c * p + h * f,
                    i = t >= 0 ? 1 : -1,
                    n = 1 - t * t;
                if (n > Number.EPSILON) {
                    const r = Math.sqrt(n),
                        a = Math.atan2(r, t * i);
                    e = Math.sin(e * a) / r, s = Math.sin(s * a) / r
                }
                const r = s * i;
                if (o = o * e + u * r, l = l * e + d * r, c = c * e + p * r, h = h * e + f * r, e === 1 - s) {
                    const e = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                    o *= e, l *= e, c *= e, h *= e
                }
            }
            e[t] = o, e[t + 1] = l, e[t + 2] = c, e[t + 3] = h
        }
        static multiplyQuaternionsFlat(e, t, i, n, r, a) {
            const s = i[n],
                o = i[n + 1],
                l = i[n + 2],
                c = i[n + 3],
                h = r[a],
                u = r[a + 1],
                d = r[a + 2],
                p = r[a + 3];
            return e[t] = s * p + c * h + o * d - l * u, e[t + 1] = o * p + c * u + l * h - s * d, e[t + 2] = l * p + c * d + s * u - o * h, e[t + 3] = c * p - s * h - o * u - l * d, e
        }
        get x() {
            return this._x
        }
        set x(e) {
            this._x = e, this._onChangeCallback()
        }
        get y() {
            return this._y
        }
        set y(e) {
            this._y = e, this._onChangeCallback()
        }
        get z() {
            return this._z
        }
        set z(e) {
            this._z = e, this._onChangeCallback()
        }
        get w() {
            return this._w
        }
        set w(e) {
            this._w = e, this._onChangeCallback()
        }
        set(e, t, i, n) {
            return this._x = e, this._y = t, this._z = i, this._w = n, this._onChangeCallback(), this
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._w)
        }
        copy(e) {
            return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this
        }
        setFromEuler(e, t) {
            if (!e || !e.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            const i = e._x,
                n = e._y,
                r = e._z,
                a = e._order,
                s = Math.cos,
                o = Math.sin,
                l = s(i / 2),
                c = s(n / 2),
                h = s(r / 2),
                u = o(i / 2),
                d = o(n / 2),
                p = o(r / 2);
            switch (a) {
                case "XYZ":
                    this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "YXZ":
                    this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                    break;
                case "ZXY":
                    this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "ZYX":
                    this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                    break;
                case "YZX":
                    this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "XZY":
                    this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
            }
            return !1 !== t && this._onChangeCallback(), this
        }
        setFromAxisAngle(e, t) {
            const i = t / 2,
                n = Math.sin(i);
            return this._x = e.x * n, this._y = e.y * n, this._z = e.z * n, this._w = Math.cos(i), this._onChangeCallback(), this
        }
        setFromRotationMatrix(e) {
            const t = e.elements,
                i = t[0],
                n = t[4],
                r = t[8],
                a = t[1],
                s = t[5],
                o = t[9],
                l = t[2],
                c = t[6],
                h = t[10],
                u = i + s + h;
            if (u > 0) {
                const e = .5 / Math.sqrt(u + 1);
                this._w = .25 / e, this._x = (c - o) * e, this._y = (r - l) * e, this._z = (a - n) * e
            } else if (i > s && i > h) {
                const e = 2 * Math.sqrt(1 + i - s - h);
                this._w = (c - o) / e, this._x = .25 * e, this._y = (n + a) / e, this._z = (r + l) / e
            } else if (s > h) {
                const e = 2 * Math.sqrt(1 + s - i - h);
                this._w = (r - l) / e, this._x = (n + a) / e, this._y = .25 * e, this._z = (o + c) / e
            } else {
                const e = 2 * Math.sqrt(1 + h - i - s);
                this._w = (a - n) / e, this._x = (r + l) / e, this._y = (o + c) / e, this._z = .25 * e
            }
            return this._onChangeCallback(), this
        }
        setFromUnitVectors(e, t) {
            let i = e.dot(t) + 1;
            return i < Number.EPSILON ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize()
        }
        angleTo(e) {
            return 2 * Math.acos(Math.abs(W(this.dot(e), -1, 1)))
        }
        rotateTowards(e, t) {
            const i = this.angleTo(e);
            if (0 === i) return this;
            const n = Math.min(1, t / i);
            return this.slerp(e, n), this
        }
        identity() {
            return this.set(0, 0, 0, 1)
        }
        invert() {
            return this.conjugate()
        }
        conjugate() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
        }
        dot(e) {
            return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        }
        normalize() {
            let e = this.length();
            return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this
        }
        multiply(e, t) {
            return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
        }
        premultiply(e) {
            return this.multiplyQuaternions(e, this)
        }
        multiplyQuaternions(e, t) {
            const i = e._x,
                n = e._y,
                r = e._z,
                a = e._w,
                s = t._x,
                o = t._y,
                l = t._z,
                c = t._w;
            return this._x = i * c + a * s + n * l - r * o, this._y = n * c + a * o + r * s - i * l, this._z = r * c + a * l + i * o - n * s, this._w = a * c - i * s - n * o - r * l, this._onChangeCallback(), this
        }
        slerp(e, t) {
            if (0 === t) return this;
            if (1 === t) return this.copy(e);
            const i = this._x,
                n = this._y,
                r = this._z,
                a = this._w;
            let s = a * e._w + i * e._x + n * e._y + r * e._z;
            if (s < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, s = -s) : this.copy(e), s >= 1) return this._w = a, this._x = i, this._y = n, this._z = r, this;
            const o = 1 - s * s;
            if (o <= Number.EPSILON) {
                const e = 1 - t;
                return this._w = e * a + t * this._w, this._x = e * i + t * this._x, this._y = e * n + t * this._y, this._z = e * r + t * this._z, this.normalize(), this._onChangeCallback(), this
            }
            const l = Math.sqrt(o),
                c = Math.atan2(l, s),
                h = Math.sin((1 - t) * c) / l,
                u = Math.sin(t * c) / l;
            return this._w = a * h + this._w * u, this._x = i * h + this._x * u, this._y = n * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this
        }
        slerpQuaternions(e, t, i) {
            return this.copy(e).slerp(t, i)
        }
        random() {
            const e = Math.random(),
                t = Math.sqrt(1 - e),
                i = Math.sqrt(e),
                n = 2 * Math.PI * Math.random(),
                r = 2 * Math.PI * Math.random();
            return this.set(t * Math.cos(n), i * Math.sin(r), i * Math.cos(r), t * Math.sin(n))
        }
        equals(e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
        }
        fromArray(e, t = 0) {
            return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this
        }
        toArray(e = [], t = 0) {
            return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
        }
        fromBufferAttribute(e, t) {
            return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this
        }
        _onChange(e) {
            return this._onChangeCallback = e, this
        }
        _onChangeCallback() {}*[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._w
        }
    }
    class ye {
        constructor(e = 0, t = 0, i = 0) {
            ye.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = i
        }
        set(e, t, i) {
            return void 0 === i && (i = this.z), this.x = e, this.y = t, this.z = i, this
        }
        setScalar(e) {
            return this.x = e, this.y = e, this.z = e, this
        }
        setX(e) {
            return this.x = e, this
        }
        setY(e) {
            return this.y = e, this
        }
        setZ(e) {
            return this.z = e, this
        }
        setComponent(e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e)
            }
            return this
        }
        getComponent(e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + e)
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z)
        }
        copy(e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this
        }
        add(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
        }
        addScalar(e) {
            return this.x += e, this.y += e, this.z += e, this
        }
        addVectors(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
        }
        addScaledVector(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
        }
        sub(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
        }
        subScalar(e) {
            return this.x -= e, this.y -= e, this.z -= e, this
        }
        subVectors(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
        }
        multiply(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
        }
        multiplyScalar(e) {
            return this.x *= e, this.y *= e, this.z *= e, this
        }
        multiplyVectors(e, t) {
            return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
        }
        applyEuler(e) {
            return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(be.setFromEuler(e))
        }
        applyAxisAngle(e, t) {
            return this.applyQuaternion(be.setFromAxisAngle(e, t))
        }
        applyMatrix3(e) {
            const t = this.x,
                i = this.y,
                n = this.z,
                r = e.elements;
            return this.x = r[0] * t + r[3] * i + r[6] * n, this.y = r[1] * t + r[4] * i + r[7] * n, this.z = r[2] * t + r[5] * i + r[8] * n, this
        }
        applyNormalMatrix(e) {
            return this.applyMatrix3(e).normalize()
        }
        applyMatrix4(e) {
            const t = this.x,
                i = this.y,
                n = this.z,
                r = e.elements,
                a = 1 / (r[3] * t + r[7] * i + r[11] * n + r[15]);
            return this.x = (r[0] * t + r[4] * i + r[8] * n + r[12]) * a, this.y = (r[1] * t + r[5] * i + r[9] * n + r[13]) * a, this.z = (r[2] * t + r[6] * i + r[10] * n + r[14]) * a, this
        }
        applyQuaternion(e) {
            const t = this.x,
                i = this.y,
                n = this.z,
                r = e.x,
                a = e.y,
                s = e.z,
                o = e.w,
                l = o * t + a * n - s * i,
                c = o * i + s * t - r * n,
                h = o * n + r * i - a * t,
                u = -r * t - a * i - s * n;
            return this.x = l * o + u * -r + c * -s - h * -a, this.y = c * o + u * -a + h * -r - l * -s, this.z = h * o + u * -s + l * -a - c * -r, this
        }
        project(e) {
            return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
        }
        unproject(e) {
            return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
        }
        transformDirection(e) {
            const t = this.x,
                i = this.y,
                n = this.z,
                r = e.elements;
            return this.x = r[0] * t + r[4] * i + r[8] * n, this.y = r[1] * t + r[5] * i + r[9] * n, this.z = r[2] * t + r[6] * i + r[10] * n, this.normalize()
        }
        divide(e) {
            return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
        }
        divideScalar(e) {
            return this.multiplyScalar(1 / e)
        }
        min(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
        }
        max(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
        }
        clamp(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
        }
        clampScalar(e, t) {
            return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this
        }
        clampLength(e, t) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)))
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        }
        dot(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        setLength(e) {
            return this.normalize().multiplyScalar(e)
        }
        lerp(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
        }
        lerpVectors(e, t, i) {
            return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this
        }
        cross(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e)
        }
        crossVectors(e, t) {
            const i = e.x,
                n = e.y,
                r = e.z,
                a = t.x,
                s = t.y,
                o = t.z;
            return this.x = n * o - r * s, this.y = r * a - i * o, this.z = i * s - n * a, this
        }
        projectOnVector(e) {
            const t = e.lengthSq();
            if (0 === t) return this.set(0, 0, 0);
            const i = e.dot(this) / t;
            return this.copy(e).multiplyScalar(i)
        }
        projectOnPlane(e) {
            return Me.copy(this).projectOnVector(e), this.sub(Me)
        }
        reflect(e) {
            return this.sub(Me.copy(e).multiplyScalar(2 * this.dot(e)))
        }
        angleTo(e) {
            const t = Math.sqrt(this.lengthSq() * e.lengthSq());
            if (0 === t) return Math.PI / 2;
            const i = this.dot(e) / t;
            return Math.acos(W(i, -1, 1))
        }
        distanceTo(e) {
            return Math.sqrt(this.distanceToSquared(e))
        }
        distanceToSquared(e) {
            const t = this.x - e.x,
                i = this.y - e.y,
                n = this.z - e.z;
            return t * t + i * i + n * n
        }
        manhattanDistanceTo(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
        }
        setFromSpherical(e) {
            return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
        }
        setFromSphericalCoords(e, t, i) {
            const n = Math.sin(t) * e;
            return this.x = n * Math.sin(i), this.y = Math.cos(t) * e, this.z = n * Math.cos(i), this
        }
        setFromCylindrical(e) {
            return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
        }
        setFromCylindricalCoords(e, t, i) {
            return this.x = e * Math.sin(t), this.y = i, this.z = e * Math.cos(t), this
        }
        setFromMatrixPosition(e) {
            const t = e.elements;
            return this.x = t[12], this.y = t[13], this.z = t[14], this
        }
        setFromMatrixScale(e) {
            const t = this.setFromMatrixColumn(e, 0).length(),
                i = this.setFromMatrixColumn(e, 1).length(),
                n = this.setFromMatrixColumn(e, 2).length();
            return this.x = t, this.y = i, this.z = n, this
        }
        setFromMatrixColumn(e, t) {
            return this.fromArray(e.elements, 4 * t)
        }
        setFromMatrix3Column(e, t) {
            return this.fromArray(e.elements, 3 * t)
        }
        setFromEuler(e) {
            return this.x = e._x, this.y = e._y, this.z = e._z, this
        }
        equals(e) {
            return e.x === this.x && e.y === this.y && e.z === this.z
        }
        fromArray(e, t = 0) {
            return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
        }
        toArray(e = [], t = 0) {
            return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
        }
        fromBufferAttribute(e, t, i) {
            return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
        }
        randomDirection() {
            const e = 2 * (Math.random() - .5),
                t = Math.random() * Math.PI * 2,
                i = Math.sqrt(1 - e ** 2);
            return this.x = i * Math.cos(t), this.y = i * Math.sin(t), this.z = e, this
        }*[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z
        }
    }
    const Me = new ye,
        be = new xe;
    class Se {
        constructor(e = new ye(1 / 0, 1 / 0, 1 / 0), t = new ye(-1 / 0, -1 / 0, -1 / 0)) {
            this.isBox3 = !0, this.min = e, this.max = t
        }
        set(e, t) {
            return this.min.copy(e), this.max.copy(t), this
        }
        setFromArray(e) {
            let t = 1 / 0,
                i = 1 / 0,
                n = 1 / 0,
                r = -1 / 0,
                a = -1 / 0,
                s = -1 / 0;
            for (let o = 0, l = e.length; o < l; o += 3) {
                const l = e[o],
                    c = e[o + 1],
                    h = e[o + 2];
                l < t && (t = l), c < i && (i = c), h < n && (n = h), l > r && (r = l), c > a && (a = c), h > s && (s = h)
            }
            return this.min.set(t, i, n), this.max.set(r, a, s), this
        }
        setFromBufferAttribute(e) {
            let t = 1 / 0,
                i = 1 / 0,
                n = 1 / 0,
                r = -1 / 0,
                a = -1 / 0,
                s = -1 / 0;
            for (let o = 0, l = e.count; o < l; o++) {
                const l = e.getX(o),
                    c = e.getY(o),
                    h = e.getZ(o);
                l < t && (t = l), c < i && (i = c), h < n && (n = h), l > r && (r = l), c > a && (a = c), h > s && (s = h)
            }
            return this.min.set(t, i, n), this.max.set(r, a, s), this
        }
        setFromPoints(e) {
            this.makeEmpty();
            for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
            return this
        }
        setFromCenterAndSize(e, t) {
            const i = Te.copy(t).multiplyScalar(.5);
            return this.min.copy(e).sub(i), this.max.copy(e).add(i), this
        }
        setFromObject(e, t = !1) {
            return this.makeEmpty(), this.expandByObject(e, t)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(e) {
            return this.min.copy(e.min), this.max.copy(e.max), this
        }
        makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        }
        getCenter(e) {
            return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
        }
        getSize(e) {
            return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
        }
        expandByPoint(e) {
            return this.min.min(e), this.max.max(e), this
        }
        expandByVector(e) {
            return this.min.sub(e), this.max.add(e), this
        }
        expandByScalar(e) {
            return this.min.addScalar(-e), this.max.addScalar(e), this
        }
        expandByObject(e, t = !1) {
            e.updateWorldMatrix(!1, !1);
            const i = e.geometry;
            if (void 0 !== i)
                if (t && null != i.attributes && void 0 !== i.attributes.position) {
                    const t = i.attributes.position;
                    for (let i = 0, n = t.count; i < n; i++) Te.fromBufferAttribute(t, i).applyMatrix4(e.matrixWorld), this.expandByPoint(Te)
                } else null === i.boundingBox && i.computeBoundingBox(), Ee.copy(i.boundingBox), Ee.applyMatrix4(e.matrixWorld), this.union(Ee);
            const n = e.children;
            for (let e = 0, i = n.length; e < i; e++) this.expandByObject(n[e], t);
            return this
        }
        containsPoint(e) {
            return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
        }
        containsBox(e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
        }
        getParameter(e, t) {
            return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
        }
        intersectsBox(e) {
            return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
        }
        intersectsSphere(e) {
            return this.clampPoint(e.center, Te), Te.distanceToSquared(e.center) <= e.radius * e.radius
        }
        intersectsPlane(e) {
            let t, i;
            return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= -e.constant && i >= -e.constant
        }
        intersectsTriangle(e) {
            if (this.isEmpty()) return !1;
            this.getCenter(Ie), Ne.subVectors(this.max, Ie), Ae.subVectors(e.a, Ie), Ce.subVectors(e.b, Ie), Le.subVectors(e.c, Ie), Pe.subVectors(Ce, Ae), Re.subVectors(Le, Ce), De.subVectors(Ae, Le);
            let t = [0, -Pe.z, Pe.y, 0, -Re.z, Re.y, 0, -De.z, De.y, Pe.z, 0, -Pe.x, Re.z, 0, -Re.x, De.z, 0, -De.x, -Pe.y, Pe.x, 0, -Re.y, Re.x, 0, -De.y, De.x, 0];
            return !!Ue(t, Ae, Ce, Le, Ne) && (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Ue(t, Ae, Ce, Le, Ne) && (ze.crossVectors(Pe, Re), t = [ze.x, ze.y, ze.z], Ue(t, Ae, Ce, Le, Ne)))
        }
        clampPoint(e, t) {
            return t.copy(e).clamp(this.min, this.max)
        }
        distanceToPoint(e) {
            return Te.copy(e).clamp(this.min, this.max).sub(e).length()
        }
        getBoundingSphere(e) {
            return this.getCenter(e.center), e.radius = .5 * this.getSize(Te).length(), e
        }
        intersect(e) {
            return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
        }
        union(e) {
            return this.min.min(e.min), this.max.max(e.max), this
        }
        applyMatrix4(e) {
            return this.isEmpty() || (we[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), we[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), we[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), we[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), we[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), we[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), we[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), we[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(we)), this
        }
        translate(e) {
            return this.min.add(e), this.max.add(e), this
        }
        equals(e) {
            return e.min.equals(this.min) && e.max.equals(this.max)
        }
    }
    const we = [new ye, new ye, new ye, new ye, new ye, new ye, new ye, new ye],
        Te = new ye,
        Ee = new Se,
        Ae = new ye,
        Ce = new ye,
        Le = new ye,
        Pe = new ye,
        Re = new ye,
        De = new ye,
        Ie = new ye,
        Ne = new ye,
        ze = new ye,
        Oe = new ye;

    function Ue(e, t, i, n, r) {
        for (let a = 0, s = e.length - 3; a <= s; a += 3) {
            Oe.fromArray(e, a);
            const s = r.x * Math.abs(Oe.x) + r.y * Math.abs(Oe.y) + r.z * Math.abs(Oe.z),
                o = t.dot(Oe),
                l = i.dot(Oe),
                c = n.dot(Oe);
            if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s) return !1
        }
        return !0
    }
    const Fe = new Se,
        Be = new ye,
        ke = new ye,
        He = new ye;
    class Ge {
        constructor(e = new ye, t = -1) {
            this.center = e, this.radius = t
        }
        set(e, t) {
            return this.center.copy(e), this.radius = t, this
        }
        setFromPoints(e, t) {
            const i = this.center;
            void 0 !== t ? i.copy(t) : Fe.setFromPoints(e).getCenter(i);
            let n = 0;
            for (let t = 0, r = e.length; t < r; t++) n = Math.max(n, i.distanceToSquared(e[t]));
            return this.radius = Math.sqrt(n), this
        }
        copy(e) {
            return this.center.copy(e.center), this.radius = e.radius, this
        }
        isEmpty() {
            return this.radius < 0
        }
        makeEmpty() {
            return this.center.set(0, 0, 0), this.radius = -1, this
        }
        containsPoint(e) {
            return e.distanceToSquared(this.center) <= this.radius * this.radius
        }
        distanceToPoint(e) {
            return e.distanceTo(this.center) - this.radius
        }
        intersectsSphere(e) {
            const t = this.radius + e.radius;
            return e.center.distanceToSquared(this.center) <= t * t
        }
        intersectsBox(e) {
            return e.intersectsSphere(this)
        }
        intersectsPlane(e) {
            return Math.abs(e.distanceToPoint(this.center)) <= this.radius
        }
        clampPoint(e, t) {
            const i = this.center.distanceToSquared(e);
            return t.copy(e), i > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t
        }
        getBoundingBox(e) {
            return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e)
        }
        applyMatrix4(e) {
            return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
        }
        translate(e) {
            return this.center.add(e), this
        }
        expandByPoint(e) {
            He.subVectors(e, this.center);
            const t = He.lengthSq();
            if (t > this.radius * this.radius) {
                const e = Math.sqrt(t),
                    i = .5 * (e - this.radius);
                this.center.add(He.multiplyScalar(i / e)), this.radius += i
            }
            return this
        }
        union(e) {
            return !0 === this.center.equals(e.center) ? ke.set(0, 0, 1).multiplyScalar(e.radius) : ke.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(Be.copy(e.center).add(ke)), this.expandByPoint(Be.copy(e.center).sub(ke)), this
        }
        equals(e) {
            return e.center.equals(this.center) && e.radius === this.radius
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    const Ve = new ye,
        We = new ye,
        je = new ye,
        qe = new ye,
        Xe = new ye,
        Ye = new ye,
        Ze = new ye;
    class Je {
        constructor(e = new ye, t = new ye(0, 0, -1)) {
            this.origin = e, this.direction = t
        }
        set(e, t) {
            return this.origin.copy(e), this.direction.copy(t), this
        }
        copy(e) {
            return this.origin.copy(e.origin), this.direction.copy(e.direction), this
        }
        at(e, t) {
            return t.copy(this.direction).multiplyScalar(e).add(this.origin)
        }
        lookAt(e) {
            return this.direction.copy(e).sub(this.origin).normalize(), this
        }
        recast(e) {
            return this.origin.copy(this.at(e, Ve)), this
        }
        closestPointToPoint(e, t) {
            t.subVectors(e, this.origin);
            const i = t.dot(this.direction);
            return i < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(i).add(this.origin)
        }
        distanceToPoint(e) {
            return Math.sqrt(this.distanceSqToPoint(e))
        }
        distanceSqToPoint(e) {
            const t = Ve.subVectors(e, this.origin).dot(this.direction);
            return t < 0 ? this.origin.distanceToSquared(e) : (Ve.copy(this.direction).multiplyScalar(t).add(this.origin), Ve.distanceToSquared(e))
        }
        distanceSqToSegment(e, t, i, n) {
            We.copy(e).add(t).multiplyScalar(.5), je.copy(t).sub(e).normalize(), qe.copy(this.origin).sub(We);
            const r = .5 * e.distanceTo(t),
                a = -this.direction.dot(je),
                s = qe.dot(this.direction),
                o = -qe.dot(je),
                l = qe.lengthSq(),
                c = Math.abs(1 - a * a);
            let h, u, d, p;
            if (c > 0)
                if (h = a * o - s, u = a * s - o, p = r * c, h >= 0)
                    if (u >= -p)
                        if (u <= p) {
                            const e = 1 / c;
                            h *= e, u *= e, d = h * (h + a * u + 2 * s) + u * (a * h + u + 2 * o) + l
                        } else u = r, h = Math.max(0, -(a * u + s)), d = -h * h + u * (u + 2 * o) + l;
            else u = -r, h = Math.max(0, -(a * u + s)), d = -h * h + u * (u + 2 * o) + l;
            else u <= -p ? (h = Math.max(0, -(-a * r + s)), u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(a * r + s)), u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l);
            else u = a > 0 ? -r : r, h = Math.max(0, -(a * u + s)), d = -h * h + u * (u + 2 * o) + l;
            return i && i.copy(this.direction).multiplyScalar(h).add(this.origin), n && n.copy(je).multiplyScalar(u).add(We), d
        }
        intersectSphere(e, t) {
            Ve.subVectors(e.center, this.origin);
            const i = Ve.dot(this.direction),
                n = Ve.dot(Ve) - i * i,
                r = e.radius * e.radius;
            if (n > r) return null;
            const a = Math.sqrt(r - n),
                s = i - a,
                o = i + a;
            return s < 0 && o < 0 ? null : s < 0 ? this.at(o, t) : this.at(s, t)
        }
        intersectsSphere(e) {
            return this.distanceSqToPoint(e.center) <= e.radius * e.radius
        }
        distanceToPlane(e) {
            const t = e.normal.dot(this.direction);
            if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
            const i = -(this.origin.dot(e.normal) + e.constant) / t;
            return i >= 0 ? i : null
        }
        intersectPlane(e, t) {
            const i = this.distanceToPlane(e);
            return null === i ? null : this.at(i, t)
        }
        intersectsPlane(e) {
            const t = e.distanceToPoint(this.origin);
            if (0 === t) return !0;
            return e.normal.dot(this.direction) * t < 0
        }
        intersectBox(e, t) {
            let i, n, r, a, s, o;
            const l = 1 / this.direction.x,
                c = 1 / this.direction.y,
                h = 1 / this.direction.z,
                u = this.origin;
            return l >= 0 ? (i = (e.min.x - u.x) * l, n = (e.max.x - u.x) * l) : (i = (e.max.x - u.x) * l, n = (e.min.x - u.x) * l), c >= 0 ? (r = (e.min.y - u.y) * c, a = (e.max.y - u.y) * c) : (r = (e.max.y - u.y) * c, a = (e.min.y - u.y) * c), i > a || r > n ? null : ((r > i || i != i) && (i = r), (a < n || n != n) && (n = a), h >= 0 ? (s = (e.min.z - u.z) * h, o = (e.max.z - u.z) * h) : (s = (e.max.z - u.z) * h, o = (e.min.z - u.z) * h), i > o || s > n ? null : ((s > i || i != i) && (i = s), (o < n || n != n) && (n = o), n < 0 ? null : this.at(i >= 0 ? i : n, t)))
        }
        intersectsBox(e) {
            return null !== this.intersectBox(e, Ve)
        }
        intersectTriangle(e, t, i, n, r) {
            Xe.subVectors(t, e), Ye.subVectors(i, e), Ze.crossVectors(Xe, Ye);
            let a, s = this.direction.dot(Ze);
            if (s > 0) {
                if (n) return null;
                a = 1
            } else {
                if (!(s < 0)) return null;
                a = -1, s = -s
            }
            qe.subVectors(this.origin, e);
            const o = a * this.direction.dot(Ye.crossVectors(qe, Ye));
            if (o < 0) return null;
            const l = a * this.direction.dot(Xe.cross(qe));
            if (l < 0) return null;
            if (o + l > s) return null;
            const c = -a * qe.dot(Ze);
            return c < 0 ? null : this.at(c / s, r)
        }
        applyMatrix4(e) {
            return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
        }
        equals(e) {
            return e.origin.equals(this.origin) && e.direction.equals(this.direction)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    class Ke {
        constructor() {
            Ke.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
        }
        set(e, t, i, n, r, a, s, o, l, c, h, u, d, p, f, m) {
            const g = this.elements;
            return g[0] = e, g[4] = t, g[8] = i, g[12] = n, g[1] = r, g[5] = a, g[9] = s, g[13] = o, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        }
        clone() {
            return (new Ke).fromArray(this.elements)
        }
        copy(e) {
            const t = this.elements,
                i = e.elements;
            return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], t[9] = i[9], t[10] = i[10], t[11] = i[11], t[12] = i[12], t[13] = i[13], t[14] = i[14], t[15] = i[15], this
        }
        copyPosition(e) {
            const t = this.elements,
                i = e.elements;
            return t[12] = i[12], t[13] = i[13], t[14] = i[14], this
        }
        setFromMatrix3(e) {
            const t = e.elements;
            return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this
        }
        extractBasis(e, t, i) {
            return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
        }
        makeBasis(e, t, i) {
            return this.set(e.x, t.x, i.x, 0, e.y, t.y, i.y, 0, e.z, t.z, i.z, 0, 0, 0, 0, 1), this
        }
        extractRotation(e) {
            const t = this.elements,
                i = e.elements,
                n = 1 / Qe.setFromMatrixColumn(e, 0).length(),
                r = 1 / Qe.setFromMatrixColumn(e, 1).length(),
                a = 1 / Qe.setFromMatrixColumn(e, 2).length();
            return t[0] = i[0] * n, t[1] = i[1] * n, t[2] = i[2] * n, t[3] = 0, t[4] = i[4] * r, t[5] = i[5] * r, t[6] = i[6] * r, t[7] = 0, t[8] = i[8] * a, t[9] = i[9] * a, t[10] = i[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
        }
        makeRotationFromEuler(e) {
            e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            const t = this.elements,
                i = e.x,
                n = e.y,
                r = e.z,
                a = Math.cos(i),
                s = Math.sin(i),
                o = Math.cos(n),
                l = Math.sin(n),
                c = Math.cos(r),
                h = Math.sin(r);
            if ("XYZ" === e.order) {
                const e = a * c,
                    i = a * h,
                    n = s * c,
                    r = s * h;
                t[0] = o * c, t[4] = -o * h, t[8] = l, t[1] = i + n * l, t[5] = e - r * l, t[9] = -s * o, t[2] = r - e * l, t[6] = n + i * l, t[10] = a * o
            } else if ("YXZ" === e.order) {
                const e = o * c,
                    i = o * h,
                    n = l * c,
                    r = l * h;
                t[0] = e + r * s, t[4] = n * s - i, t[8] = a * l, t[1] = a * h, t[5] = a * c, t[9] = -s, t[2] = i * s - n, t[6] = r + e * s, t[10] = a * o
            } else if ("ZXY" === e.order) {
                const e = o * c,
                    i = o * h,
                    n = l * c,
                    r = l * h;
                t[0] = e - r * s, t[4] = -a * h, t[8] = n + i * s, t[1] = i + n * s, t[5] = a * c, t[9] = r - e * s, t[2] = -a * l, t[6] = s, t[10] = a * o
            } else if ("ZYX" === e.order) {
                const e = a * c,
                    i = a * h,
                    n = s * c,
                    r = s * h;
                t[0] = o * c, t[4] = n * l - i, t[8] = e * l + r, t[1] = o * h, t[5] = r * l + e, t[9] = i * l - n, t[2] = -l, t[6] = s * o, t[10] = a * o
            } else if ("YZX" === e.order) {
                const e = a * o,
                    i = a * l,
                    n = s * o,
                    r = s * l;
                t[0] = o * c, t[4] = r - e * h, t[8] = n * h + i, t[1] = h, t[5] = a * c, t[9] = -s * c, t[2] = -l * c, t[6] = i * h + n, t[10] = e - r * h
            } else if ("XZY" === e.order) {
                const e = a * o,
                    i = a * l,
                    n = s * o,
                    r = s * l;
                t[0] = o * c, t[4] = -h, t[8] = l * c, t[1] = e * h + r, t[5] = a * c, t[9] = i * h - n, t[2] = n * h - i, t[6] = s * c, t[10] = r * h + e
            }
            return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
        }
        makeRotationFromQuaternion(e) {
            return this.compose(et, e, tt)
        }
        lookAt(e, t, i) {
            const n = this.elements;
            return rt.subVectors(e, t), 0 === rt.lengthSq() && (rt.z = 1), rt.normalize(), it.crossVectors(i, rt), 0 === it.lengthSq() && (1 === Math.abs(i.z) ? rt.x += 1e-4 : rt.z += 1e-4, rt.normalize(), it.crossVectors(i, rt)), it.normalize(), nt.crossVectors(rt, it), n[0] = it.x, n[4] = nt.x, n[8] = rt.x, n[1] = it.y, n[5] = nt.y, n[9] = rt.y, n[2] = it.z, n[6] = nt.z, n[10] = rt.z, this
        }
        multiply(e, t) {
            return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
        }
        premultiply(e) {
            return this.multiplyMatrices(e, this)
        }
        multiplyMatrices(e, t) {
            const i = e.elements,
                n = t.elements,
                r = this.elements,
                a = i[0],
                s = i[4],
                o = i[8],
                l = i[12],
                c = i[1],
                h = i[5],
                u = i[9],
                d = i[13],
                p = i[2],
                f = i[6],
                m = i[10],
                g = i[14],
                v = i[3],
                _ = i[7],
                x = i[11],
                y = i[15],
                M = n[0],
                b = n[4],
                S = n[8],
                w = n[12],
                T = n[1],
                E = n[5],
                A = n[9],
                C = n[13],
                L = n[2],
                P = n[6],
                R = n[10],
                D = n[14],
                I = n[3],
                N = n[7],
                z = n[11],
                O = n[15];
            return r[0] = a * M + s * T + o * L + l * I, r[4] = a * b + s * E + o * P + l * N, r[8] = a * S + s * A + o * R + l * z, r[12] = a * w + s * C + o * D + l * O, r[1] = c * M + h * T + u * L + d * I, r[5] = c * b + h * E + u * P + d * N, r[9] = c * S + h * A + u * R + d * z, r[13] = c * w + h * C + u * D + d * O, r[2] = p * M + f * T + m * L + g * I, r[6] = p * b + f * E + m * P + g * N, r[10] = p * S + f * A + m * R + g * z, r[14] = p * w + f * C + m * D + g * O, r[3] = v * M + _ * T + x * L + y * I, r[7] = v * b + _ * E + x * P + y * N, r[11] = v * S + _ * A + x * R + y * z, r[15] = v * w + _ * C + x * D + y * O, this
        }
        multiplyScalar(e) {
            const t = this.elements;
            return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
        }
        determinant() {
            const e = this.elements,
                t = e[0],
                i = e[4],
                n = e[8],
                r = e[12],
                a = e[1],
                s = e[5],
                o = e[9],
                l = e[13],
                c = e[2],
                h = e[6],
                u = e[10],
                d = e[14];
            return e[3] * (+r * o * h - n * l * h - r * s * u + i * l * u + n * s * d - i * o * d) + e[7] * (+t * o * d - t * l * u + r * a * u - n * a * d + n * l * c - r * o * c) + e[11] * (+t * l * h - t * s * d - r * a * h + i * a * d + r * s * c - i * l * c) + e[15] * (-n * s * c - t * o * h + t * s * u + n * a * h - i * a * u + i * o * c)
        }
        transpose() {
            const e = this.elements;
            let t;
            return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
        }
        setPosition(e, t, i) {
            const n = this.elements;
            return e.isVector3 ? (n[12] = e.x, n[13] = e.y, n[14] = e.z) : (n[12] = e, n[13] = t, n[14] = i), this
        }
        invert() {
            const e = this.elements,
                t = e[0],
                i = e[1],
                n = e[2],
                r = e[3],
                a = e[4],
                s = e[5],
                o = e[6],
                l = e[7],
                c = e[8],
                h = e[9],
                u = e[10],
                d = e[11],
                p = e[12],
                f = e[13],
                m = e[14],
                g = e[15],
                v = h * m * l - f * u * l + f * o * d - s * m * d - h * o * g + s * u * g,
                _ = p * u * l - c * m * l - p * o * d + a * m * d + c * o * g - a * u * g,
                x = c * f * l - p * h * l + p * s * d - a * f * d - c * s * g + a * h * g,
                y = p * h * o - c * f * o - p * s * u + a * f * u + c * s * m - a * h * m,
                M = t * v + i * _ + n * x + r * y;
            if (0 === M) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const b = 1 / M;
            return e[0] = v * b, e[1] = (f * u * r - h * m * r - f * n * d + i * m * d + h * n * g - i * u * g) * b, e[2] = (s * m * r - f * o * r + f * n * l - i * m * l - s * n * g + i * o * g) * b, e[3] = (h * o * r - s * u * r - h * n * l + i * u * l + s * n * d - i * o * d) * b, e[4] = _ * b, e[5] = (c * m * r - p * u * r + p * n * d - t * m * d - c * n * g + t * u * g) * b, e[6] = (p * o * r - a * m * r - p * n * l + t * m * l + a * n * g - t * o * g) * b, e[7] = (a * u * r - c * o * r + c * n * l - t * u * l - a * n * d + t * o * d) * b, e[8] = x * b, e[9] = (p * h * r - c * f * r - p * i * d + t * f * d + c * i * g - t * h * g) * b, e[10] = (a * f * r - p * s * r + p * i * l - t * f * l - a * i * g + t * s * g) * b, e[11] = (c * s * r - a * h * r - c * i * l + t * h * l + a * i * d - t * s * d) * b, e[12] = y * b, e[13] = (c * f * n - p * h * n + p * i * u - t * f * u - c * i * m + t * h * m) * b, e[14] = (p * s * n - a * f * n - p * i * o + t * f * o + a * i * m - t * s * m) * b, e[15] = (a * h * n - c * s * n + c * i * o - t * h * o - a * i * u + t * s * u) * b, this
        }
        scale(e) {
            const t = this.elements,
                i = e.x,
                n = e.y,
                r = e.z;
            return t[0] *= i, t[4] *= n, t[8] *= r, t[1] *= i, t[5] *= n, t[9] *= r, t[2] *= i, t[6] *= n, t[10] *= r, t[3] *= i, t[7] *= n, t[11] *= r, this
        }
        getMaxScaleOnAxis() {
            const e = this.elements,
                t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
                i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
                n = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
            return Math.sqrt(Math.max(t, i, n))
        }
        makeTranslation(e, t, i) {
            return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this
        }
        makeRotationX(e) {
            const t = Math.cos(e),
                i = Math.sin(e);
            return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this
        }
        makeRotationY(e) {
            const t = Math.cos(e),
                i = Math.sin(e);
            return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this
        }
        makeRotationZ(e) {
            const t = Math.cos(e),
                i = Math.sin(e);
            return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        }
        makeRotationAxis(e, t) {
            const i = Math.cos(t),
                n = Math.sin(t),
                r = 1 - i,
                a = e.x,
                s = e.y,
                o = e.z,
                l = r * a,
                c = r * s;
            return this.set(l * a + i, l * s - n * o, l * o + n * s, 0, l * s + n * o, c * s + i, c * o - n * a, 0, l * o - n * s, c * o + n * a, r * o * o + i, 0, 0, 0, 0, 1), this
        }
        makeScale(e, t, i) {
            return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
        }
        makeShear(e, t, i, n, r, a) {
            return this.set(1, i, r, 0, e, 1, a, 0, t, n, 1, 0, 0, 0, 0, 1), this
        }
        compose(e, t, i) {
            const n = this.elements,
                r = t._x,
                a = t._y,
                s = t._z,
                o = t._w,
                l = r + r,
                c = a + a,
                h = s + s,
                u = r * l,
                d = r * c,
                p = r * h,
                f = a * c,
                m = a * h,
                g = s * h,
                v = o * l,
                _ = o * c,
                x = o * h,
                y = i.x,
                M = i.y,
                b = i.z;
            return n[0] = (1 - (f + g)) * y, n[1] = (d + x) * y, n[2] = (p - _) * y, n[3] = 0, n[4] = (d - x) * M, n[5] = (1 - (u + g)) * M, n[6] = (m + v) * M, n[7] = 0, n[8] = (p + _) * b, n[9] = (m - v) * b, n[10] = (1 - (u + f)) * b, n[11] = 0, n[12] = e.x, n[13] = e.y, n[14] = e.z, n[15] = 1, this
        }
        decompose(e, t, i) {
            const n = this.elements;
            let r = Qe.set(n[0], n[1], n[2]).length();
            const a = Qe.set(n[4], n[5], n[6]).length(),
                s = Qe.set(n[8], n[9], n[10]).length();
            this.determinant() < 0 && (r = -r), e.x = n[12], e.y = n[13], e.z = n[14], $e.copy(this);
            const o = 1 / r,
                l = 1 / a,
                c = 1 / s;
            return $e.elements[0] *= o, $e.elements[1] *= o, $e.elements[2] *= o, $e.elements[4] *= l, $e.elements[5] *= l, $e.elements[6] *= l, $e.elements[8] *= c, $e.elements[9] *= c, $e.elements[10] *= c, t.setFromRotationMatrix($e), i.x = r, i.y = a, i.z = s, this
        }
        makePerspective(e, t, i, n, r, a) {
            void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            const s = this.elements,
                o = 2 * r / (t - e),
                l = 2 * r / (i - n),
                c = (t + e) / (t - e),
                h = (i + n) / (i - n),
                u = -(a + r) / (a - r),
                d = -2 * a * r / (a - r);
            return s[0] = o, s[4] = 0, s[8] = c, s[12] = 0, s[1] = 0, s[5] = l, s[9] = h, s[13] = 0, s[2] = 0, s[6] = 0, s[10] = u, s[14] = d, s[3] = 0, s[7] = 0, s[11] = -1, s[15] = 0, this
        }
        makeOrthographic(e, t, i, n, r, a) {
            const s = this.elements,
                o = 1 / (t - e),
                l = 1 / (i - n),
                c = 1 / (a - r),
                h = (t + e) * o,
                u = (i + n) * l,
                d = (a + r) * c;
            return s[0] = 2 * o, s[4] = 0, s[8] = 0, s[12] = -h, s[1] = 0, s[5] = 2 * l, s[9] = 0, s[13] = -u, s[2] = 0, s[6] = 0, s[10] = -2 * c, s[14] = -d, s[3] = 0, s[7] = 0, s[11] = 0, s[15] = 1, this
        }
        equals(e) {
            const t = this.elements,
                i = e.elements;
            for (let e = 0; e < 16; e++)
                if (t[e] !== i[e]) return !1;
            return !0
        }
        fromArray(e, t = 0) {
            for (let i = 0; i < 16; i++) this.elements[i] = e[i + t];
            return this
        }
        toArray(e = [], t = 0) {
            const i = this.elements;
            return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e
        }
    }
    const Qe = new ye,
        $e = new Ke,
        et = new ye(0, 0, 0),
        tt = new ye(1, 1, 1),
        it = new ye,
        nt = new ye,
        rt = new ye,
        at = new Ke,
        st = new xe;
    class ot {
        constructor(e = 0, t = 0, i = 0, n = ot.DefaultOrder) {
            this.isEuler = !0, this._x = e, this._y = t, this._z = i, this._order = n
        }
        get x() {
            return this._x
        }
        set x(e) {
            this._x = e, this._onChangeCallback()
        }
        get y() {
            return this._y
        }
        set y(e) {
            this._y = e, this._onChangeCallback()
        }
        get z() {
            return this._z
        }
        set z(e) {
            this._z = e, this._onChangeCallback()
        }
        get order() {
            return this._order
        }
        set order(e) {
            this._order = e, this._onChangeCallback()
        }
        set(e, t, i, n = this._order) {
            return this._x = e, this._y = t, this._z = i, this._order = n, this._onChangeCallback(), this
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._order)
        }
        copy(e) {
            return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this
        }
        setFromRotationMatrix(e, t = this._order, i = !0) {
            const n = e.elements,
                r = n[0],
                a = n[4],
                s = n[8],
                o = n[1],
                l = n[5],
                c = n[9],
                h = n[2],
                u = n[6],
                d = n[10];
            switch (t) {
                case "XYZ":
                    this._y = Math.asin(W(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(u, l), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-W(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(W(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(o, r));
                    break;
                case "ZYX":
                    this._y = Math.asin(-W(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
                    break;
                case "YZX":
                    this._z = Math.asin(W(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(s, d));
                    break;
                case "XZY":
                    this._z = Math.asin(-W(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(s, r)) : (this._x = Math.atan2(-c, d), this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
            }
            return this._order = t, !0 === i && this._onChangeCallback(), this
        }
        setFromQuaternion(e, t, i) {
            return at.makeRotationFromQuaternion(e), this.setFromRotationMatrix(at, t, i)
        }
        setFromVector3(e, t = this._order) {
            return this.set(e.x, e.y, e.z, t)
        }
        reorder(e) {
            return st.setFromEuler(this), this.setFromQuaternion(st, e)
        }
        equals(e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
        }
        fromArray(e) {
            return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this._onChangeCallback(), this
        }
        toArray(e = [], t = 0) {
            return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
        }
        _onChange(e) {
            return this._onChangeCallback = e, this
        }
        _onChangeCallback() {}*[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._order
        }
        toVector3() {
            console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")
        }
    }
    ot.DefaultOrder = "XYZ", ot.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
    class lt {
        constructor() {
            this.mask = 1
        }
        set(e) {
            this.mask = (1 << e | 0) >>> 0
        }
        enable(e) {
            this.mask |= 1 << e | 0
        }
        enableAll() {
            this.mask = -1
        }
        toggle(e) {
            this.mask ^= 1 << e | 0
        }
        disable(e) {
            this.mask &= ~(1 << e | 0)
        }
        disableAll() {
            this.mask = 0
        }
        test(e) {
            return 0 != (this.mask & e.mask)
        }
        isEnabled(e) {
            return 0 != (this.mask & (1 << e | 0))
        }
    }
    let ct = 0;
    const ht = new ye,
        ut = new xe,
        dt = new Ke,
        pt = new ye,
        ft = new ye,
        mt = new ye,
        gt = new xe,
        vt = new ye(1, 0, 0),
        _t = new ye(0, 1, 0),
        xt = new ye(0, 0, 1),
        yt = {
            type: "added"
        },
        Mt = {
            type: "removed"
        };
    class bt extends B {
        constructor() {
            super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
                value: ct++
            }), this.uuid = V(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = bt.DefaultUp.clone();
            const e = new ye,
                t = new ot,
                i = new xe,
                n = new ye(1, 1, 1);
            t._onChange((function() {
                i.setFromEuler(t, !1)
            })), i._onChange((function() {
                t.setFromQuaternion(i, void 0, !1)
            })), Object.defineProperties(this, {
                position: {
                    configurable: !0,
                    enumerable: !0,
                    value: e
                },
                rotation: {
                    configurable: !0,
                    enumerable: !0,
                    value: t
                },
                quaternion: {
                    configurable: !0,
                    enumerable: !0,
                    value: i
                },
                scale: {
                    configurable: !0,
                    enumerable: !0,
                    value: n
                },
                modelViewMatrix: {
                    value: new Ke
                },
                normalMatrix: {
                    value: new Z
                }
            }), this.matrix = new Ke, this.matrixWorld = new Ke, this.matrixAutoUpdate = bt.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new lt, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
        }
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(e) {
            this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale)
        }
        applyQuaternion(e) {
            return this.quaternion.premultiply(e), this
        }
        setRotationFromAxisAngle(e, t) {
            this.quaternion.setFromAxisAngle(e, t)
        }
        setRotationFromEuler(e) {
            this.quaternion.setFromEuler(e, !0)
        }
        setRotationFromMatrix(e) {
            this.quaternion.setFromRotationMatrix(e)
        }
        setRotationFromQuaternion(e) {
            this.quaternion.copy(e)
        }
        rotateOnAxis(e, t) {
            return ut.setFromAxisAngle(e, t), this.quaternion.multiply(ut), this
        }
        rotateOnWorldAxis(e, t) {
            return ut.setFromAxisAngle(e, t), this.quaternion.premultiply(ut), this
        }
        rotateX(e) {
            return this.rotateOnAxis(vt, e)
        }
        rotateY(e) {
            return this.rotateOnAxis(_t, e)
        }
        rotateZ(e) {
            return this.rotateOnAxis(xt, e)
        }
        translateOnAxis(e, t) {
            return ht.copy(e).applyQuaternion(this.quaternion), this.position.add(ht.multiplyScalar(t)), this
        }
        translateX(e) {
            return this.translateOnAxis(vt, e)
        }
        translateY(e) {
            return this.translateOnAxis(_t, e)
        }
        translateZ(e) {
            return this.translateOnAxis(xt, e)
        }
        localToWorld(e) {
            return e.applyMatrix4(this.matrixWorld)
        }
        worldToLocal(e) {
            return e.applyMatrix4(dt.copy(this.matrixWorld).invert())
        }
        lookAt(e, t, i) {
            e.isVector3 ? pt.copy(e) : pt.set(e, t, i);
            const n = this.parent;
            this.updateWorldMatrix(!0, !1), ft.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? dt.lookAt(ft, pt, this.up) : dt.lookAt(pt, ft, this.up), this.quaternion.setFromRotationMatrix(dt), n && (dt.extractRotation(n.matrixWorld), ut.setFromRotationMatrix(dt), this.quaternion.premultiply(ut.invert()))
        }
        add(e) {
            if (arguments.length > 1) {
                for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
                return this
            }
            return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(yt)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
        }
        remove(e) {
            if (arguments.length > 1) {
                for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
                return this
            }
            const t = this.children.indexOf(e);
            return -1 !== t && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Mt)), this
        }
        removeFromParent() {
            const e = this.parent;
            return null !== e && e.remove(this), this
        }
        clear() {
            for (let e = 0; e < this.children.length; e++) {
                const t = this.children[e];
                t.parent = null, t.dispatchEvent(Mt)
            }
            return this.children.length = 0, this
        }
        attach(e) {
            return this.updateWorldMatrix(!0, !1), dt.copy(this.matrixWorld).invert(), null !== e.parent && (e.parent.updateWorldMatrix(!0, !1), dt.multiply(e.parent.matrixWorld)), e.applyMatrix4(dt), this.add(e), e.updateWorldMatrix(!1, !0), this
        }
        getObjectById(e) {
            return this.getObjectByProperty("id", e)
        }
        getObjectByName(e) {
            return this.getObjectByProperty("name", e)
        }
        getObjectByProperty(e, t) {
            if (this[e] === t) return this;
            for (let i = 0, n = this.children.length; i < n; i++) {
                const n = this.children[i].getObjectByProperty(e, t);
                if (void 0 !== n) return n
            }
        }
        getWorldPosition(e) {
            return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
        }
        getWorldQuaternion(e) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ft, e, mt), e
        }
        getWorldScale(e) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ft, gt, e), e
        }
        getWorldDirection(e) {
            this.updateWorldMatrix(!0, !1);
            const t = this.matrixWorld.elements;
            return e.set(t[8], t[9], t[10]).normalize()
        }
        raycast() {}
        traverse(e) {
            e(this);
            const t = this.children;
            for (let i = 0, n = t.length; i < n; i++) t[i].traverse(e)
        }
        traverseVisible(e) {
            if (!1 === this.visible) return;
            e(this);
            const t = this.children;
            for (let i = 0, n = t.length; i < n; i++) t[i].traverseVisible(e)
        }
        traverseAncestors(e) {
            const t = this.parent;
            null !== t && (e(t), t.traverseAncestors(e))
        }
        updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
        }
        updateMatrixWorld(e) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
            const t = this.children;
            for (let i = 0, n = t.length; i < n; i++) t[i].updateMatrixWorld(e)
        }
        updateWorldMatrix(e, t) {
            const i = this.parent;
            if (!0 === e && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === t) {
                const e = this.children;
                for (let t = 0, i = e.length; t < i; t++) e[t].updateWorldMatrix(!1, !0)
            }
        }
        toJSON(e) {
            const t = void 0 === e || "string" == typeof e,
                i = {};
            t && (e = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
                skeletons: {},
                animations: {},
                nodes: {}
            }, i.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            const n = {};

            function r(t, i) {
                return void 0 === t[i.uuid] && (t[i.uuid] = i.toJSON(e)), i.uuid
            }
            if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), !1 === this.frustumCulled && (n.frustumCulled = !1), 0 !== this.renderOrder && (n.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1), this.isInstancedMesh && (n.type = "InstancedMesh", n.count = this.count, n.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (n.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? n.background = this.background.toJSON() : this.background.isTexture && (n.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && (n.environment = this.environment.toJSON(e).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
                n.geometry = r(e.geometries, this.geometry);
                const t = this.geometry.parameters;
                if (void 0 !== t && void 0 !== t.shapes) {
                    const i = t.shapes;
                    if (Array.isArray(i))
                        for (let t = 0, n = i.length; t < n; t++) {
                            const n = i[t];
                            r(e.shapes, n)
                        } else r(e.shapes, i)
                }
            }
            if (this.isSkinnedMesh && (n.bindMode = this.bindMode, n.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(e.skeletons, this.skeleton), n.skeleton = this.skeleton.uuid)), void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    const t = [];
                    for (let i = 0, n = this.material.length; i < n; i++) t.push(r(e.materials, this.material[i]));
                    n.material = t
                } else n.material = r(e.materials, this.material);
            if (this.children.length > 0) {
                n.children = [];
                for (let t = 0; t < this.children.length; t++) n.children.push(this.children[t].toJSON(e).object)
            }
            if (this.animations.length > 0) {
                n.animations = [];
                for (let t = 0; t < this.animations.length; t++) {
                    const i = this.animations[t];
                    n.animations.push(r(e.animations, i))
                }
            }
            if (t) {
                const t = a(e.geometries),
                    n = a(e.materials),
                    r = a(e.textures),
                    s = a(e.images),
                    o = a(e.shapes),
                    l = a(e.skeletons),
                    c = a(e.animations),
                    h = a(e.nodes);
                t.length > 0 && (i.geometries = t), n.length > 0 && (i.materials = n), r.length > 0 && (i.textures = r), s.length > 0 && (i.images = s), o.length > 0 && (i.shapes = o), l.length > 0 && (i.skeletons = l), c.length > 0 && (i.animations = c), h.length > 0 && (i.nodes = h)
            }
            return i.object = n, i;

            function a(e) {
                const t = [];
                for (const i in e) {
                    const n = e[i];
                    delete n.metadata, t.push(n)
                }
                return t
            }
        }
        clone(e) {
            return (new this.constructor).copy(this, e)
        }
        copy(e, t = !0) {
            if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), !0 === t)
                for (let t = 0; t < e.children.length; t++) {
                    const i = e.children[t];
                    this.add(i.clone())
                }
            return this
        }
    }
    bt.DefaultUp = new ye(0, 1, 0), bt.DefaultMatrixAutoUpdate = !0;
    const St = new ye,
        wt = new ye,
        Tt = new ye,
        Et = new ye,
        At = new ye,
        Ct = new ye,
        Lt = new ye,
        Pt = new ye,
        Rt = new ye,
        Dt = new ye;
    class It {
        constructor(e = new ye, t = new ye, i = new ye) {
            this.a = e, this.b = t, this.c = i
        }
        static getNormal(e, t, i, n) {
            n.subVectors(i, t), St.subVectors(e, t), n.cross(St);
            const r = n.lengthSq();
            return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0)
        }
        static getBarycoord(e, t, i, n, r) {
            St.subVectors(n, t), wt.subVectors(i, t), Tt.subVectors(e, t);
            const a = St.dot(St),
                s = St.dot(wt),
                o = St.dot(Tt),
                l = wt.dot(wt),
                c = wt.dot(Tt),
                h = a * l - s * s;
            if (0 === h) return r.set(-2, -1, -1);
            const u = 1 / h,
                d = (l * o - s * c) * u,
                p = (a * c - s * o) * u;
            return r.set(1 - d - p, p, d)
        }
        static containsPoint(e, t, i, n) {
            return this.getBarycoord(e, t, i, n, Et), Et.x >= 0 && Et.y >= 0 && Et.x + Et.y <= 1
        }
        static getUV(e, t, i, n, r, a, s, o) {
            return this.getBarycoord(e, t, i, n, Et), o.set(0, 0), o.addScaledVector(r, Et.x), o.addScaledVector(a, Et.y), o.addScaledVector(s, Et.z), o
        }
        static isFrontFacing(e, t, i, n) {
            return St.subVectors(i, t), wt.subVectors(e, t), St.cross(wt).dot(n) < 0
        }
        set(e, t, i) {
            return this.a.copy(e), this.b.copy(t), this.c.copy(i), this
        }
        setFromPointsAndIndices(e, t, i, n) {
            return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[n]), this
        }
        setFromAttributeAndIndices(e, t, i, n) {
            return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, i), this.c.fromBufferAttribute(e, n), this
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(e) {
            return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
        }
        getArea() {
            return St.subVectors(this.c, this.b), wt.subVectors(this.a, this.b), .5 * St.cross(wt).length()
        }
        getMidpoint(e) {
            return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        }
        getNormal(e) {
            return It.getNormal(this.a, this.b, this.c, e)
        }
        getPlane(e) {
            return e.setFromCoplanarPoints(this.a, this.b, this.c)
        }
        getBarycoord(e, t) {
            return It.getBarycoord(e, this.a, this.b, this.c, t)
        }
        getUV(e, t, i, n, r) {
            return It.getUV(e, this.a, this.b, this.c, t, i, n, r)
        }
        containsPoint(e) {
            return It.containsPoint(e, this.a, this.b, this.c)
        }
        isFrontFacing(e) {
            return It.isFrontFacing(this.a, this.b, this.c, e)
        }
        intersectsBox(e) {
            return e.intersectsTriangle(this)
        }
        closestPointToPoint(e, t) {
            const i = this.a,
                n = this.b,
                r = this.c;
            let a, s;
            At.subVectors(n, i), Ct.subVectors(r, i), Pt.subVectors(e, i);
            const o = At.dot(Pt),
                l = Ct.dot(Pt);
            if (o <= 0 && l <= 0) return t.copy(i);
            Rt.subVectors(e, n);
            const c = At.dot(Rt),
                h = Ct.dot(Rt);
            if (c >= 0 && h <= c) return t.copy(n);
            const u = o * h - c * l;
            if (u <= 0 && o >= 0 && c <= 0) return a = o / (o - c), t.copy(i).addScaledVector(At, a);
            Dt.subVectors(e, r);
            const d = At.dot(Dt),
                p = Ct.dot(Dt);
            if (p >= 0 && d <= p) return t.copy(r);
            const f = d * l - o * p;
            if (f <= 0 && l >= 0 && p <= 0) return s = l / (l - p), t.copy(i).addScaledVector(Ct, s);
            const m = c * p - d * h;
            if (m <= 0 && h - c >= 0 && d - p >= 0) return Lt.subVectors(r, n), s = (h - c) / (h - c + (d - p)), t.copy(n).addScaledVector(Lt, s);
            const g = 1 / (m + f + u);
            return a = f * g, s = u * g, t.copy(i).addScaledVector(At, a).addScaledVector(Ct, s)
        }
        equals(e) {
            return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
        }
    }
    let Nt = 0;
    class zt extends B {
        constructor() {
            super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
                value: Nt++
            }), this.uuid = V(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = l, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = z, this.stencilZFail = z, this.stencilZPass = z, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
        }
        get alphaTest() {
            return this._alphaTest
        }
        set alphaTest(e) {
            this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e
        }
        onBuild() {}
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
            return this.onBeforeCompile.toString()
        }
        setValues(e) {
            if (void 0 !== e)
                for (const t in e) {
                    const i = e[t];
                    if (void 0 === i) {
                        console.warn("THREE.Material: '" + t + "' parameter is undefined.");
                        continue
                    }
                    if ("shading" === t) {
                        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === i;
                        continue
                    }
                    const n = this[t];
                    void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[t] = i : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
                }
        }
        toJSON(e) {
            const t = void 0 === e || "string" == typeof e;
            t && (e = {
                textures: {},
                images: {}
            });
            const i = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };

            function n(e) {
                const t = [];
                for (const i in e) {
                    const n = e[i];
                    delete n.metadata, t.push(n)
                }
                return t
            }
            if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), void 0 !== this.sheen && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearcoat && (i.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (i.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (i.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, void 0 !== this.combine && (i.combine = this.combine)), void 0 !== this.envMapIntensity && (i.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (i.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), void 0 !== this.transmission && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), void 0 !== this.thickness && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), void 0 !== this.attenuationDistance && (i.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (i.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (i.size = this.size), null !== this.shadowSide && (i.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (i.blending = this.blending), 0 !== this.side && (i.side = this.side), this.vertexColors && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, i.colorWrite = this.colorWrite, i.stencilWrite = this.stencilWrite, i.stencilWriteMask = this.stencilWriteMask, i.stencilFunc = this.stencilFunc, i.stencilRef = this.stencilRef, i.stencilFuncMask = this.stencilFuncMask, i.stencilFail = this.stencilFail, i.stencilZFail = this.stencilZFail, i.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (i.rotation = this.rotation), !0 === this.polygonOffset && (i.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (i.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), !0 === this.dithering && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (i.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (i.flatShading = this.flatShading), !1 === this.visible && (i.visible = !1), !1 === this.toneMapped && (i.toneMapped = !1), !1 === this.fog && (i.fog = !1), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), t) {
                const t = n(e.textures),
                    r = n(e.images);
                t.length > 0 && (i.textures = t), r.length > 0 && (i.images = r)
            }
            return i
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(e) {
            this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
            const t = e.clippingPlanes;
            let i = null;
            if (null !== t) {
                const e = t.length;
                i = new Array(e);
                for (let n = 0; n !== e; ++n) i[n] = t[n].clone()
            }
            return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
        set needsUpdate(e) {
            !0 === e && this.version++
        }
    }
    class Ot extends zt {
        constructor(e) {
            super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new le(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e)
        }
        copy(e) {
            return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this
        }
    }
    const Ut = new ye,
        Ft = new Y;
    class Bt {
        constructor(e, t, i) {
            if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = void 0 !== e ? e.length / t : 0, this.normalized = !0 === i, this.usage = O, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0
        }
        onUploadCallback() {}
        set needsUpdate(e) {
            !0 === e && this.version++
        }
        setUsage(e) {
            return this.usage = e, this
        }
        copy(e) {
            return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this
        }
        copyAt(e, t, i) {
            e *= this.itemSize, i *= t.itemSize;
            for (let n = 0, r = this.itemSize; n < r; n++) this.array[e + n] = t.array[i + n];
            return this
        }
        copyArray(e) {
            return this.array.set(e), this
        }
        copyColorsArray(e) {
            const t = this.array;
            let i = 0;
            for (let n = 0, r = e.length; n < r; n++) {
                let r = e[n];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), r = new le), t[i++] = r.r, t[i++] = r.g, t[i++] = r.b
            }
            return this
        }
        copyVector2sArray(e) {
            const t = this.array;
            let i = 0;
            for (let n = 0, r = e.length; n < r; n++) {
                let r = e[n];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", n), r = new Y), t[i++] = r.x, t[i++] = r.y
            }
            return this
        }
        copyVector3sArray(e) {
            const t = this.array;
            let i = 0;
            for (let n = 0, r = e.length; n < r; n++) {
                let r = e[n];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), r = new ye), t[i++] = r.x, t[i++] = r.y, t[i++] = r.z
            }
            return this
        }
        copyVector4sArray(e) {
            const t = this.array;
            let i = 0;
            for (let n = 0, r = e.length; n < r; n++) {
                let r = e[n];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), r = new me), t[i++] = r.x, t[i++] = r.y, t[i++] = r.z, t[i++] = r.w
            }
            return this
        }
        applyMatrix3(e) {
            if (2 === this.itemSize)
                for (let t = 0, i = this.count; t < i; t++) Ft.fromBufferAttribute(this, t), Ft.applyMatrix3(e), this.setXY(t, Ft.x, Ft.y);
            else if (3 === this.itemSize)
                for (let t = 0, i = this.count; t < i; t++) Ut.fromBufferAttribute(this, t), Ut.applyMatrix3(e), this.setXYZ(t, Ut.x, Ut.y, Ut.z);
            return this
        }
        applyMatrix4(e) {
            for (let t = 0, i = this.count; t < i; t++) Ut.fromBufferAttribute(this, t), Ut.applyMatrix4(e), this.setXYZ(t, Ut.x, Ut.y, Ut.z);
            return this
        }
        applyNormalMatrix(e) {
            for (let t = 0, i = this.count; t < i; t++) Ut.fromBufferAttribute(this, t), Ut.applyNormalMatrix(e), this.setXYZ(t, Ut.x, Ut.y, Ut.z);
            return this
        }
        transformDirection(e) {
            for (let t = 0, i = this.count; t < i; t++) Ut.fromBufferAttribute(this, t), Ut.transformDirection(e), this.setXYZ(t, Ut.x, Ut.y, Ut.z);
            return this
        }
        set(e, t = 0) {
            return this.array.set(e, t), this
        }
        getX(e) {
            return this.array[e * this.itemSize]
        }
        setX(e, t) {
            return this.array[e * this.itemSize] = t, this
        }
        getY(e) {
            return this.array[e * this.itemSize + 1]
        }
        setY(e, t) {
            return this.array[e * this.itemSize + 1] = t, this
        }
        getZ(e) {
            return this.array[e * this.itemSize + 2]
        }
        setZ(e, t) {
            return this.array[e * this.itemSize + 2] = t, this
        }
        getW(e) {
            return this.array[e * this.itemSize + 3]
        }
        setW(e, t) {
            return this.array[e * this.itemSize + 3] = t, this
        }
        setXY(e, t, i) {
            return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = i, this
        }
        setXYZ(e, t, i, n) {
            return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = n, this
        }
        setXYZW(e, t, i, n, r) {
            return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = n, this.array[e + 3] = r, this
        }
        onUpload(e) {
            return this.onUploadCallback = e, this
        }
        clone() {
            return new this.constructor(this.array, this.itemSize).copy(this)
        }
        toJSON() {
            const e = {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.from(this.array),
                normalized: this.normalized
            };
            return "" !== this.name && (e.name = this.name), this.usage !== O && (e.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (e.updateRange = this.updateRange), e
        }
    }
    class kt extends Bt {
        constructor(e, t, i) {
            super(new Uint16Array(e), t, i)
        }
    }
    class Ht extends Bt {
        constructor(e, t, i) {
            super(new Uint32Array(e), t, i)
        }
    }
    class Gt extends Bt {
        constructor(e, t, i) {
            super(new Float32Array(e), t, i)
        }
    }
    let Vt = 0;
    const Wt = new Ke,
        jt = new bt,
        qt = new ye,
        Xt = new Se,
        Yt = new Se,
        Zt = new ye;
    class Jt extends B {
        constructor() {
            super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
                value: Vt++
            }), this.uuid = V(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }, this.userData = {}
        }
        getIndex() {
            return this.index
        }
        setIndex(e) {
            return Array.isArray(e) ? this.index = new(J(e) ? Ht : kt)(e, 1) : this.index = e, this
        }
        getAttribute(e) {
            return this.attributes[e]
        }
        setAttribute(e, t) {
            return this.attributes[e] = t, this
        }
        deleteAttribute(e) {
            return delete this.attributes[e], this
        }
        hasAttribute(e) {
            return void 0 !== this.attributes[e]
        }
        addGroup(e, t, i = 0) {
            this.groups.push({
                start: e,
                count: t,
                materialIndex: i
            })
        }
        clearGroups() {
            this.groups = []
        }
        setDrawRange(e, t) {
            this.drawRange.start = e, this.drawRange.count = t
        }
        applyMatrix4(e) {
            const t = this.attributes.position;
            void 0 !== t && (t.applyMatrix4(e), t.needsUpdate = !0);
            const i = this.attributes.normal;
            if (void 0 !== i) {
                const t = (new Z).getNormalMatrix(e);
                i.applyNormalMatrix(t), i.needsUpdate = !0
            }
            const n = this.attributes.tangent;
            return void 0 !== n && (n.transformDirection(e), n.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
        }
        applyQuaternion(e) {
            return Wt.makeRotationFromQuaternion(e), this.applyMatrix4(Wt), this
        }
        rotateX(e) {
            return Wt.makeRotationX(e), this.applyMatrix4(Wt), this
        }
        rotateY(e) {
            return Wt.makeRotationY(e), this.applyMatrix4(Wt), this
        }
        rotateZ(e) {
            return Wt.makeRotationZ(e), this.applyMatrix4(Wt), this
        }
        translate(e, t, i) {
            return Wt.makeTranslation(e, t, i), this.applyMatrix4(Wt), this
        }
        scale(e, t, i) {
            return Wt.makeScale(e, t, i), this.applyMatrix4(Wt), this
        }
        lookAt(e) {
            return jt.lookAt(e), jt.updateMatrix(), this.applyMatrix4(jt.matrix), this
        }
        center() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(qt).negate(), this.translate(qt.x, qt.y, qt.z), this
        }
        setFromPoints(e) {
            const t = [];
            for (let i = 0, n = e.length; i < n; i++) {
                const n = e[i];
                t.push(n.x, n.y, n.z || 0)
            }
            return this.setAttribute("position", new Gt(t, 3)), this
        }
        computeBoundingBox() {
            null === this.boundingBox && (this.boundingBox = new Se);
            const e = this.attributes.position,
                t = this.morphAttributes.position;
            if (e && e.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new ye(-1 / 0, -1 / 0, -1 / 0), new ye(1 / 0, 1 / 0, 1 / 0));
            if (void 0 !== e) {
                if (this.boundingBox.setFromBufferAttribute(e), t)
                    for (let e = 0, i = t.length; e < i; e++) {
                        const i = t[e];
                        Xt.setFromBufferAttribute(i), this.morphTargetsRelative ? (Zt.addVectors(this.boundingBox.min, Xt.min), this.boundingBox.expandByPoint(Zt), Zt.addVectors(this.boundingBox.max, Xt.max), this.boundingBox.expandByPoint(Zt)) : (this.boundingBox.expandByPoint(Xt.min), this.boundingBox.expandByPoint(Xt.max))
                    }
            } else this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        }
        computeBoundingSphere() {
            null === this.boundingSphere && (this.boundingSphere = new Ge);
            const e = this.attributes.position,
                t = this.morphAttributes.position;
            if (e && e.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new ye, 1 / 0);
            if (e) {
                const i = this.boundingSphere.center;
                if (Xt.setFromBufferAttribute(e), t)
                    for (let e = 0, i = t.length; e < i; e++) {
                        const i = t[e];
                        Yt.setFromBufferAttribute(i), this.morphTargetsRelative ? (Zt.addVectors(Xt.min, Yt.min), Xt.expandByPoint(Zt), Zt.addVectors(Xt.max, Yt.max), Xt.expandByPoint(Zt)) : (Xt.expandByPoint(Yt.min), Xt.expandByPoint(Yt.max))
                    }
                Xt.getCenter(i);
                let n = 0;
                for (let t = 0, r = e.count; t < r; t++) Zt.fromBufferAttribute(e, t), n = Math.max(n, i.distanceToSquared(Zt));
                if (t)
                    for (let r = 0, a = t.length; r < a; r++) {
                        const a = t[r],
                            s = this.morphTargetsRelative;
                        for (let t = 0, r = a.count; t < r; t++) Zt.fromBufferAttribute(a, t), s && (qt.fromBufferAttribute(e, t), Zt.add(qt)), n = Math.max(n, i.distanceToSquared(Zt))
                    }
                this.boundingSphere.radius = Math.sqrt(n), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        }
        computeTangents() {
            const e = this.index,
                t = this.attributes;
            if (null === e || void 0 === t.position || void 0 === t.normal || void 0 === t.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            const i = e.array,
                n = t.position.array,
                r = t.normal.array,
                a = t.uv.array,
                s = n.length / 3;
            !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new Bt(new Float32Array(4 * s), 4));
            const o = this.getAttribute("tangent").array,
                l = [],
                c = [];
            for (let e = 0; e < s; e++) l[e] = new ye, c[e] = new ye;
            const h = new ye,
                u = new ye,
                d = new ye,
                p = new Y,
                f = new Y,
                m = new Y,
                g = new ye,
                v = new ye;

            function _(e, t, i) {
                h.fromArray(n, 3 * e), u.fromArray(n, 3 * t), d.fromArray(n, 3 * i), p.fromArray(a, 2 * e), f.fromArray(a, 2 * t), m.fromArray(a, 2 * i), u.sub(h), d.sub(h), f.sub(p), m.sub(p);
                const r = 1 / (f.x * m.y - m.x * f.y);
                isFinite(r) && (g.copy(u).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(r), v.copy(d).multiplyScalar(f.x).addScaledVector(u, -m.x).multiplyScalar(r), l[e].add(g), l[t].add(g), l[i].add(g), c[e].add(v), c[t].add(v), c[i].add(v))
            }
            let x = this.groups;
            0 === x.length && (x = [{
                start: 0,
                count: i.length
            }]);
            for (let e = 0, t = x.length; e < t; ++e) {
                const t = x[e],
                    n = t.start;
                for (let e = n, r = n + t.count; e < r; e += 3) _(i[e + 0], i[e + 1], i[e + 2])
            }
            const y = new ye,
                M = new ye,
                b = new ye,
                S = new ye;

            function w(e) {
                b.fromArray(r, 3 * e), S.copy(b);
                const t = l[e];
                y.copy(t), y.sub(b.multiplyScalar(b.dot(t))).normalize(), M.crossVectors(S, t);
                const i = M.dot(c[e]) < 0 ? -1 : 1;
                o[4 * e] = y.x, o[4 * e + 1] = y.y, o[4 * e + 2] = y.z, o[4 * e + 3] = i
            }
            for (let e = 0, t = x.length; e < t; ++e) {
                const t = x[e],
                    n = t.start;
                for (let e = n, r = n + t.count; e < r; e += 3) w(i[e + 0]), w(i[e + 1]), w(i[e + 2])
            }
        }
        computeVertexNormals() {
            const e = this.index,
                t = this.getAttribute("position");
            if (void 0 !== t) {
                let i = this.getAttribute("normal");
                if (void 0 === i) i = new Bt(new Float32Array(3 * t.count), 3), this.setAttribute("normal", i);
                else
                    for (let e = 0, t = i.count; e < t; e++) i.setXYZ(e, 0, 0, 0);
                const n = new ye,
                    r = new ye,
                    a = new ye,
                    s = new ye,
                    o = new ye,
                    l = new ye,
                    c = new ye,
                    h = new ye;
                if (e)
                    for (let u = 0, d = e.count; u < d; u += 3) {
                        const d = e.getX(u + 0),
                            p = e.getX(u + 1),
                            f = e.getX(u + 2);
                        n.fromBufferAttribute(t, d), r.fromBufferAttribute(t, p), a.fromBufferAttribute(t, f), c.subVectors(a, r), h.subVectors(n, r), c.cross(h), s.fromBufferAttribute(i, d), o.fromBufferAttribute(i, p), l.fromBufferAttribute(i, f), s.add(c), o.add(c), l.add(c), i.setXYZ(d, s.x, s.y, s.z), i.setXYZ(p, o.x, o.y, o.z), i.setXYZ(f, l.x, l.y, l.z)
                    } else
                        for (let e = 0, s = t.count; e < s; e += 3) n.fromBufferAttribute(t, e + 0), r.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), c.subVectors(a, r), h.subVectors(n, r), c.cross(h), i.setXYZ(e + 0, c.x, c.y, c.z), i.setXYZ(e + 1, c.x, c.y, c.z), i.setXYZ(e + 2, c.x, c.y, c.z);
                this.normalizeNormals(), i.needsUpdate = !0
            }
        }
        merge(e, t) {
            if (!e || !e.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
            void 0 === t && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
            const i = this.attributes;
            for (const n in i) {
                if (void 0 === e.attributes[n]) continue;
                const r = i[n].array,
                    a = e.attributes[n],
                    s = a.array,
                    o = a.itemSize * t,
                    l = Math.min(s.length, r.length - o);
                for (let e = 0, t = o; e < l; e++, t++) r[t] = s[e]
            }
            return this
        }
        normalizeNormals() {
            const e = this.attributes.normal;
            for (let t = 0, i = e.count; t < i; t++) Zt.fromBufferAttribute(e, t), Zt.normalize(), e.setXYZ(t, Zt.x, Zt.y, Zt.z)
        }
        toNonIndexed() {
            function e(e, t) {
                const i = e.array,
                    n = e.itemSize,
                    r = e.normalized,
                    a = new i.constructor(t.length * n);
                let s = 0,
                    o = 0;
                for (let r = 0, l = t.length; r < l; r++) {
                    s = e.isInterleavedBufferAttribute ? t[r] * e.data.stride + e.offset : t[r] * n;
                    for (let e = 0; e < n; e++) a[o++] = i[s++]
                }
                return new Bt(a, n, r)
            }
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
            const t = new Jt,
                i = this.index.array,
                n = this.attributes;
            for (const r in n) {
                const a = e(n[r], i);
                t.setAttribute(r, a)
            }
            const r = this.morphAttributes;
            for (const n in r) {
                const a = [],
                    s = r[n];
                for (let t = 0, n = s.length; t < n; t++) {
                    const n = e(s[t], i);
                    a.push(n)
                }
                t.morphAttributes[n] = a
            }
            t.morphTargetsRelative = this.morphTargetsRelative;
            const a = this.groups;
            for (let e = 0, i = a.length; e < i; e++) {
                const i = a[e];
                t.addGroup(i.start, i.count, i.materialIndex)
            }
            return t
        }
        toJSON() {
            const e = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), void 0 !== this.parameters) {
                const t = this.parameters;
                for (const i in t) void 0 !== t[i] && (e[i] = t[i]);
                return e
            }
            e.data = {
                attributes: {}
            };
            const t = this.index;
            null !== t && (e.data.index = {
                type: t.array.constructor.name,
                array: Array.prototype.slice.call(t.array)
            });
            const i = this.attributes;
            for (const t in i) {
                const n = i[t];
                e.data.attributes[t] = n.toJSON(e.data)
            }
            const n = {};
            let r = !1;
            for (const t in this.morphAttributes) {
                const i = this.morphAttributes[t],
                    a = [];
                for (let t = 0, n = i.length; t < n; t++) {
                    const n = i[t];
                    a.push(n.toJSON(e.data))
                }
                a.length > 0 && (n[t] = a, r = !0)
            }
            r && (e.data.morphAttributes = n, e.data.morphTargetsRelative = this.morphTargetsRelative);
            const a = this.groups;
            a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
            const s = this.boundingSphere;
            return null !== s && (e.data.boundingSphere = {
                center: s.center.toArray(),
                radius: s.radius
            }), e
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(e) {
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
            const t = {};
            this.name = e.name;
            const i = e.index;
            null !== i && this.setIndex(i.clone(t));
            const n = e.attributes;
            for (const e in n) {
                const i = n[e];
                this.setAttribute(e, i.clone(t))
            }
            const r = e.morphAttributes;
            for (const e in r) {
                const i = [],
                    n = r[e];
                for (let e = 0, r = n.length; e < r; e++) i.push(n[e].clone(t));
                this.morphAttributes[e] = i
            }
            this.morphTargetsRelative = e.morphTargetsRelative;
            const a = e.groups;
            for (let e = 0, t = a.length; e < t; e++) {
                const t = a[e];
                this.addGroup(t.start, t.count, t.materialIndex)
            }
            const s = e.boundingBox;
            null !== s && (this.boundingBox = s.clone());
            const o = e.boundingSphere;
            return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, void 0 !== e.parameters && (this.parameters = Object.assign({}, e.parameters)), this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }
    const Kt = new Ke,
        Qt = new Je,
        $t = new Ge,
        ei = new ye,
        ti = new ye,
        ii = new ye,
        ni = new ye,
        ri = new ye,
        ai = new ye,
        si = new ye,
        oi = new ye,
        li = new ye,
        ci = new Y,
        hi = new Y,
        ui = new Y,
        di = new ye,
        pi = new ye;
    class fi extends bt {
        constructor(e = new Jt, t = new Ot) {
            super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets()
        }
        copy(e, t) {
            return super.copy(e, t), void 0 !== e.morphTargetInfluences && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), void 0 !== e.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this
        }
        updateMorphTargets() {
            const e = this.geometry.morphAttributes,
                t = Object.keys(e);
            if (t.length > 0) {
                const i = e[t[0]];
                if (void 0 !== i) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for (let e = 0, t = i.length; e < t; e++) {
                        const t = i[e].name || String(e);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e
                    }
                }
            }
        }
        raycast(e, t) {
            const i = this.geometry,
                n = this.material,
                r = this.matrixWorld;
            if (void 0 === n) return;
            if (null === i.boundingSphere && i.computeBoundingSphere(), $t.copy(i.boundingSphere), $t.applyMatrix4(r), !1 === e.ray.intersectsSphere($t)) return;
            if (Kt.copy(r).invert(), Qt.copy(e.ray).applyMatrix4(Kt), null !== i.boundingBox && !1 === Qt.intersectsBox(i.boundingBox)) return;
            let a;
            const s = i.index,
                o = i.attributes.position,
                l = i.morphAttributes.position,
                c = i.morphTargetsRelative,
                h = i.attributes.uv,
                u = i.attributes.uv2,
                d = i.groups,
                p = i.drawRange;
            if (null !== s)
                if (Array.isArray(n))
                    for (let i = 0, r = d.length; i < r; i++) {
                        const r = d[i],
                            f = n[r.materialIndex];
                        for (let i = Math.max(r.start, p.start), n = Math.min(s.count, Math.min(r.start + r.count, p.start + p.count)); i < n; i += 3) {
                            const n = s.getX(i),
                                d = s.getX(i + 1),
                                p = s.getX(i + 2);
                            a = mi(this, f, e, Qt, o, l, c, h, u, n, d, p), a && (a.faceIndex = Math.floor(i / 3), a.face.materialIndex = r.materialIndex, t.push(a))
                        }
                    } else {
                        for (let i = Math.max(0, p.start), r = Math.min(s.count, p.start + p.count); i < r; i += 3) {
                            const r = s.getX(i),
                                d = s.getX(i + 1),
                                p = s.getX(i + 2);
                            a = mi(this, n, e, Qt, o, l, c, h, u, r, d, p), a && (a.faceIndex = Math.floor(i / 3), t.push(a))
                        }
                    } else if (void 0 !== o)
                        if (Array.isArray(n))
                            for (let i = 0, r = d.length; i < r; i++) {
                                const r = d[i],
                                    s = n[r.materialIndex];
                                for (let i = Math.max(r.start, p.start), n = Math.min(o.count, Math.min(r.start + r.count, p.start + p.count)); i < n; i += 3) {
                                    a = mi(this, s, e, Qt, o, l, c, h, u, i, i + 1, i + 2), a && (a.faceIndex = Math.floor(i / 3), a.face.materialIndex = r.materialIndex, t.push(a))
                                }
                            } else {
                                for (let i = Math.max(0, p.start), r = Math.min(o.count, p.start + p.count); i < r; i += 3) {
                                    a = mi(this, n, e, Qt, o, l, c, h, u, i, i + 1, i + 2), a && (a.faceIndex = Math.floor(i / 3), t.push(a))
                                }
                            }
        }
    }

    function mi(e, t, i, n, r, a, s, o, l, c, h, u) {
        ei.fromBufferAttribute(r, c), ti.fromBufferAttribute(r, h), ii.fromBufferAttribute(r, u);
        const d = e.morphTargetInfluences;
        if (a && d) {
            si.set(0, 0, 0), oi.set(0, 0, 0), li.set(0, 0, 0);
            for (let e = 0, t = a.length; e < t; e++) {
                const t = d[e],
                    i = a[e];
                0 !== t && (ni.fromBufferAttribute(i, c), ri.fromBufferAttribute(i, h), ai.fromBufferAttribute(i, u), s ? (si.addScaledVector(ni, t), oi.addScaledVector(ri, t), li.addScaledVector(ai, t)) : (si.addScaledVector(ni.sub(ei), t), oi.addScaledVector(ri.sub(ti), t), li.addScaledVector(ai.sub(ii), t)))
            }
            ei.add(si), ti.add(oi), ii.add(li)
        }
        e.isSkinnedMesh && (e.boneTransform(c, ei), e.boneTransform(h, ti), e.boneTransform(u, ii));
        const p = function(e, t, i, n, r, a, s, o) {
            let l;
            if (l = 1 === t.side ? n.intersectTriangle(s, a, r, !0, o) : n.intersectTriangle(r, a, s, 2 !== t.side, o), null === l) return null;
            pi.copy(o), pi.applyMatrix4(e.matrixWorld);
            const c = i.ray.origin.distanceTo(pi);
            return c < i.near || c > i.far ? null : {
                distance: c,
                point: pi.clone(),
                object: e
            }
        }(e, t, i, n, ei, ti, ii, di);
        if (p) {
            o && (ci.fromBufferAttribute(o, c), hi.fromBufferAttribute(o, h), ui.fromBufferAttribute(o, u), p.uv = It.getUV(di, ei, ti, ii, ci, hi, ui, new Y)), l && (ci.fromBufferAttribute(l, c), hi.fromBufferAttribute(l, h), ui.fromBufferAttribute(l, u), p.uv2 = It.getUV(di, ei, ti, ii, ci, hi, ui, new Y));
            const e = {
                a: c,
                b: h,
                c: u,
                normal: new ye,
                materialIndex: 0
            };
            It.getNormal(ei, ti, ii, e.normal), p.face = e
        }
        return p
    }
    class gi extends Jt {
        constructor(e = 1, t = 1, i = 1, n = 1, r = 1, a = 1) {
            super(), this.type = "BoxGeometry", this.parameters = {
                width: e,
                height: t,
                depth: i,
                widthSegments: n,
                heightSegments: r,
                depthSegments: a
            };
            const s = this;
            n = Math.floor(n), r = Math.floor(r), a = Math.floor(a);
            const o = [],
                l = [],
                c = [],
                h = [];
            let u = 0,
                d = 0;

            function p(e, t, i, n, r, a, p, f, m, g, v) {
                const _ = a / m,
                    x = p / g,
                    y = a / 2,
                    M = p / 2,
                    b = f / 2,
                    S = m + 1,
                    w = g + 1;
                let T = 0,
                    E = 0;
                const A = new ye;
                for (let a = 0; a < w; a++) {
                    const s = a * x - M;
                    for (let o = 0; o < S; o++) {
                        const u = o * _ - y;
                        A[e] = u * n, A[t] = s * r, A[i] = b, l.push(A.x, A.y, A.z), A[e] = 0, A[t] = 0, A[i] = f > 0 ? 1 : -1, c.push(A.x, A.y, A.z), h.push(o / m), h.push(1 - a / g), T += 1
                    }
                }
                for (let e = 0; e < g; e++)
                    for (let t = 0; t < m; t++) {
                        const i = u + t + S * e,
                            n = u + t + S * (e + 1),
                            r = u + (t + 1) + S * (e + 1),
                            a = u + (t + 1) + S * e;
                        o.push(i, n, a), o.push(n, r, a), E += 6
                    }
                s.addGroup(d, E, v), d += E, u += T
            }
            p("z", "y", "x", -1, -1, i, t, e, a, r, 0), p("z", "y", "x", 1, -1, i, t, -e, a, r, 1), p("x", "z", "y", 1, 1, e, i, t, n, a, 2), p("x", "z", "y", 1, -1, e, i, -t, n, a, 3), p("x", "y", "z", 1, -1, e, t, i, n, r, 4), p("x", "y", "z", -1, -1, e, t, -i, n, r, 5), this.setIndex(o), this.setAttribute("position", new Gt(l, 3)), this.setAttribute("normal", new Gt(c, 3)), this.setAttribute("uv", new Gt(h, 2))
        }
        static fromJSON(e) {
            return new gi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments)
        }
    }

    function vi(e) {
        const t = {};
        for (const i in e) {
            t[i] = {};
            for (const n in e[i]) {
                const r = e[i][n];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? t[i][n] = r.clone() : Array.isArray(r) ? t[i][n] = r.slice() : t[i][n] = r
            }
        }
        return t
    }

    function _i(e) {
        const t = {};
        for (let i = 0; i < e.length; i++) {
            const n = vi(e[i]);
            for (const e in n) t[e] = n[e]
        }
        return t
    }
    const xi = {
        clone: vi,
        merge: _i
    };
    class yi extends zt {
        constructor(e) {
            super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}", this.fragmentShader = "void main(){gl_FragColor=vec4(1.0,0.0,0.0,1.0);}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
                derivatives: !1,
                fragDepth: !1,
                drawBuffers: !1,
                shaderTextureLOD: !1
            }, this.defaultAttributeValues = {
                color: [1, 1, 1],
                uv: [0, 0],
                uv2: [0, 0]
            }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
        }
        copy(e) {
            return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = vi(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this
        }
        toJSON(e) {
            const t = super.toJSON(e);
            t.glslVersion = this.glslVersion, t.uniforms = {};
            for (const i in this.uniforms) {
                const n = this.uniforms[i].value;
                n && n.isTexture ? t.uniforms[i] = {
                    type: "t",
                    value: n.toJSON(e).uuid
                } : n && n.isColor ? t.uniforms[i] = {
                    type: "c",
                    value: n.getHex()
                } : n && n.isVector2 ? t.uniforms[i] = {
                    type: "v2",
                    value: n.toArray()
                } : n && n.isVector3 ? t.uniforms[i] = {
                    type: "v3",
                    value: n.toArray()
                } : n && n.isVector4 ? t.uniforms[i] = {
                    type: "v4",
                    value: n.toArray()
                } : n && n.isMatrix3 ? t.uniforms[i] = {
                    type: "m3",
                    value: n.toArray()
                } : n && n.isMatrix4 ? t.uniforms[i] = {
                    type: "m4",
                    value: n.toArray()
                } : t.uniforms[i] = {
                    value: n
                }
            }
            Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
            const i = {};
            for (const e in this.extensions) !0 === this.extensions[e] && (i[e] = !0);
            return Object.keys(i).length > 0 && (t.extensions = i), t
        }
    }
    class Mi extends bt {
        constructor() {
            super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ke, this.projectionMatrix = new Ke, this.projectionMatrixInverse = new Ke
        }
        copy(e, t) {
            return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this
        }
        getWorldDirection(e) {
            this.updateWorldMatrix(!0, !1);
            const t = this.matrixWorld.elements;
            return e.set(-t[8], -t[9], -t[10]).normalize()
        }
        updateMatrixWorld(e) {
            super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
        }
        updateWorldMatrix(e, t) {
            super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    class bi extends Mi {
        constructor(e = 50, t = 1, i = .1, n = 2e3) {
            super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = i, this.far = n, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
        }
        copy(e, t) {
            return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = null === e.view ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
        }
        setFocalLength(e) {
            const t = .5 * this.getFilmHeight() / e;
            this.fov = 2 * G * Math.atan(t), this.updateProjectionMatrix()
        }
        getFocalLength() {
            const e = Math.tan(.5 * H * this.fov);
            return .5 * this.getFilmHeight() / e
        }
        getEffectiveFOV() {
            return 2 * G * Math.atan(Math.tan(.5 * H * this.fov) / this.zoom)
        }
        getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1)
        }
        getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1)
        }
        setViewOffset(e, t, i, n, r, a) {
            this.aspect = e / t, null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        }
        updateProjectionMatrix() {
            const e = this.near;
            let t = e * Math.tan(.5 * H * this.fov) / this.zoom,
                i = 2 * t,
                n = this.aspect * i,
                r = -.5 * n;
            const a = this.view;
            if (null !== this.view && this.view.enabled) {
                const e = a.fullWidth,
                    s = a.fullHeight;
                r += a.offsetX * n / e, t -= a.offsetY * i / s, n *= a.width / e, i *= a.height / s
            }
            const s = this.filmOffset;
            0 !== s && (r += e * s / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, t, t - i, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
        }
    }
    const Si = 90;
    class wi extends bt {
        constructor(e, t, i) {
            if (super(), this.type = "CubeCamera", !0 !== i.isWebGLCubeRenderTarget) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
            this.renderTarget = i;
            const n = new bi(Si, 1, e, t);
            n.layers = this.layers, n.up.set(0, -1, 0), n.lookAt(new ye(1, 0, 0)), this.add(n);
            const r = new bi(Si, 1, e, t);
            r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new ye(-1, 0, 0)), this.add(r);
            const a = new bi(Si, 1, e, t);
            a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(new ye(0, 1, 0)), this.add(a);
            const s = new bi(Si, 1, e, t);
            s.layers = this.layers, s.up.set(0, 0, -1), s.lookAt(new ye(0, -1, 0)), this.add(s);
            const o = new bi(Si, 1, e, t);
            o.layers = this.layers, o.up.set(0, -1, 0), o.lookAt(new ye(0, 0, 1)), this.add(o);
            const l = new bi(Si, 1, e, t);
            l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new ye(0, 0, -1)), this.add(l)
        }
        update(e, t) {
            null === this.parent && this.updateMatrixWorld();
            const i = this.renderTarget,
                [n, r, a, s, o, l] = this.children,
                c = e.getRenderTarget(),
                h = e.toneMapping,
                u = e.xr.enabled;
            e.toneMapping = 0, e.xr.enabled = !1;
            const d = i.texture.generateMipmaps;
            i.texture.generateMipmaps = !1, e.setRenderTarget(i, 0), e.render(t, n), e.setRenderTarget(i, 1), e.render(t, r), e.setRenderTarget(i, 2), e.render(t, a), e.setRenderTarget(i, 3), e.render(t, s), e.setRenderTarget(i, 4), e.render(t, o), i.texture.generateMipmaps = d, e.setRenderTarget(i, 5), e.render(t, l), e.setRenderTarget(c), e.toneMapping = h, e.xr.enabled = u, i.texture.needsPMREMUpdate = !0
        }
    }
    class Ti extends fe {
        constructor(e, t, i, n, r, a, s, o, l, h) {
            super(e = void 0 !== e ? e : [], t = void 0 !== t ? t : c, i, n, r, a, s, o, l, h), this.isCubeTexture = !0, this.flipY = !1
        }
        get images() {
            return this.image
        }
        set images(e) {
            this.image = e
        }
    }
    class Ei extends ge {
        constructor(e, t = {}) {
            super(e, e, t), this.isWebGLCubeRenderTarget = !0;
            const i = {
                    width: e,
                    height: e,
                    depth: 1
                },
                n = [i, i, i, i, i, i];
            this.texture = new Ti(n, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== t.generateMipmaps && t.generateMipmaps, this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : v
        }
        fromEquirectangularTexture(e, t) {
            this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
            const i = {
                    uniforms: {
                        tEquirect: {
                            value: null
                        }
                    },
                    vertexShader: "varying vec3 vWorldDirection;vec3 transformDirection(in vec3 dir,in mat4 matrix){return normalize((matrix*vec4(dir,0.0)).xyz);}void main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\n}",
                    fragmentShader: "uniform sampler2D tEquirect;varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vec3 direction=normalize(vWorldDirection);vec2 sampleUV=equirectUv(direction);gl_FragColor=texture2D(tEquirect,sampleUV);}"
                },
                n = new gi(5, 5, 5),
                r = new yi({
                    name: "CubemapFromEquirect",
                    uniforms: vi(i.uniforms),
                    vertexShader: i.vertexShader,
                    fragmentShader: i.fragmentShader,
                    side: 1,
                    blending: 0
                });
            r.uniforms.tEquirect.value = t;
            const a = new fi(n, r),
                s = t.minFilter;
            t.minFilter === _ && (t.minFilter = v);
            return new wi(1, 10, this).update(e, a), t.minFilter = s, a.geometry.dispose(), a.material.dispose(), this
        }
        clear(e, t, i, n) {
            const r = e.getRenderTarget();
            for (let r = 0; r < 6; r++) e.setRenderTarget(this, r), e.clear(t, i, n);
            e.setRenderTarget(r)
        }
    }
    const Ai = new ye,
        Ci = new ye,
        Li = new Z;
    class Pi {
        constructor(e = new ye(1, 0, 0), t = 0) {
            this.isPlane = !0, this.normal = e, this.constant = t
        }
        set(e, t) {
            return this.normal.copy(e), this.constant = t, this
        }
        setComponents(e, t, i, n) {
            return this.normal.set(e, t, i), this.constant = n, this
        }
        setFromNormalAndCoplanarPoint(e, t) {
            return this.normal.copy(e), this.constant = -t.dot(this.normal), this
        }
        setFromCoplanarPoints(e, t, i) {
            const n = Ai.subVectors(i, t).cross(Ci.subVectors(e, t)).normalize();
            return this.setFromNormalAndCoplanarPoint(n, e), this
        }
        copy(e) {
            return this.normal.copy(e.normal), this.constant = e.constant, this
        }
        normalize() {
            const e = 1 / this.normal.length();
            return this.normal.multiplyScalar(e), this.constant *= e, this
        }
        negate() {
            return this.constant *= -1, this.normal.negate(), this
        }
        distanceToPoint(e) {
            return this.normal.dot(e) + this.constant
        }
        distanceToSphere(e) {
            return this.distanceToPoint(e.center) - e.radius
        }
        projectPoint(e, t) {
            return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
        }
        intersectLine(e, t) {
            const i = e.delta(Ai),
                n = this.normal.dot(i);
            if (0 === n) return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
            const r = -(e.start.dot(this.normal) + this.constant) / n;
            return r < 0 || r > 1 ? null : t.copy(i).multiplyScalar(r).add(e.start)
        }
        intersectsLine(e) {
            const t = this.distanceToPoint(e.start),
                i = this.distanceToPoint(e.end);
            return t < 0 && i > 0 || i < 0 && t > 0
        }
        intersectsBox(e) {
            return e.intersectsPlane(this)
        }
        intersectsSphere(e) {
            return e.intersectsPlane(this)
        }
        coplanarPoint(e) {
            return e.copy(this.normal).multiplyScalar(-this.constant)
        }
        applyMatrix4(e, t) {
            const i = t || Li.getNormalMatrix(e),
                n = this.coplanarPoint(Ai).applyMatrix4(e),
                r = this.normal.applyMatrix3(i).normalize();
            return this.constant = -n.dot(r), this
        }
        translate(e) {
            return this.constant -= e.dot(this.normal), this
        }
        equals(e) {
            return e.normal.equals(this.normal) && e.constant === this.constant
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    const Ri = new Ge,
        Di = new ye;
    class Ii {
        constructor(e = new Pi, t = new Pi, i = new Pi, n = new Pi, r = new Pi, a = new Pi) {
            this.planes = [e, t, i, n, r, a]
        }
        set(e, t, i, n, r, a) {
            const s = this.planes;
            return s[0].copy(e), s[1].copy(t), s[2].copy(i), s[3].copy(n), s[4].copy(r), s[5].copy(a), this
        }
        copy(e) {
            const t = this.planes;
            for (let i = 0; i < 6; i++) t[i].copy(e.planes[i]);
            return this
        }
        setFromProjectionMatrix(e) {
            const t = this.planes,
                i = e.elements,
                n = i[0],
                r = i[1],
                a = i[2],
                s = i[3],
                o = i[4],
                l = i[5],
                c = i[6],
                h = i[7],
                u = i[8],
                d = i[9],
                p = i[10],
                f = i[11],
                m = i[12],
                g = i[13],
                v = i[14],
                _ = i[15];
            return t[0].setComponents(s - n, h - o, f - u, _ - m).normalize(), t[1].setComponents(s + n, h + o, f + u, _ + m).normalize(), t[2].setComponents(s + r, h + l, f + d, _ + g).normalize(), t[3].setComponents(s - r, h - l, f - d, _ - g).normalize(), t[4].setComponents(s - a, h - c, f - p, _ - v).normalize(), t[5].setComponents(s + a, h + c, f + p, _ + v).normalize(), this
        }
        intersectsObject(e) {
            const t = e.geometry;
            return null === t.boundingSphere && t.computeBoundingSphere(), Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Ri)
        }
        intersectsSprite(e) {
            return Ri.center.set(0, 0, 0), Ri.radius = .7071067811865476, Ri.applyMatrix4(e.matrixWorld), this.intersectsSphere(Ri)
        }
        intersectsSphere(e) {
            const t = this.planes,
                i = e.center,
                n = -e.radius;
            for (let e = 0; e < 6; e++) {
                if (t[e].distanceToPoint(i) < n) return !1
            }
            return !0
        }
        intersectsBox(e) {
            const t = this.planes;
            for (let i = 0; i < 6; i++) {
                const n = t[i];
                if (Di.x = n.normal.x > 0 ? e.max.x : e.min.x, Di.y = n.normal.y > 0 ? e.max.y : e.min.y, Di.z = n.normal.z > 0 ? e.max.z : e.min.z, n.distanceToPoint(Di) < 0) return !1
            }
            return !0
        }
        containsPoint(e) {
            const t = this.planes;
            for (let i = 0; i < 6; i++)
                if (t[i].distanceToPoint(e) < 0) return !1;
            return !0
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }

    function Ni() {
        let e = null,
            t = !1,
            i = null,
            n = null;

        function r(t, a) {
            i(t, a), n = e.requestAnimationFrame(r)
        }
        return {
            start: function() {
                !0 !== t && null !== i && (n = e.requestAnimationFrame(r), t = !0)
            },
            stop: function() {
                e.cancelAnimationFrame(n), t = !1
            },
            setAnimationLoop: function(e) {
                i = e
            },
            setContext: function(t) {
                e = t
            }
        }
    }

    function zi(e, t) {
        const i = t.isWebGL2,
            n = new WeakMap;
        return {
            get: function(e) {
                return e.isInterleavedBufferAttribute && (e = e.data), n.get(e)
            },
            remove: function(t) {
                t.isInterleavedBufferAttribute && (t = t.data);
                const i = n.get(t);
                i && (e.deleteBuffer(i.buffer), n.delete(t))
            },
            update: function(t, r) {
                if (t.isGLBufferAttribute) {
                    const e = n.get(t);
                    return void((!e || e.version < t.version) && n.set(t, {
                        buffer: t.buffer,
                        type: t.type,
                        bytesPerElement: t.elementSize,
                        version: t.version
                    }))
                }
                t.isInterleavedBufferAttribute && (t = t.data);
                const a = n.get(t);
                void 0 === a ? n.set(t, function(t, n) {
                    const r = t.array,
                        a = t.usage,
                        s = e.createBuffer();
                    let o;
                    if (e.bindBuffer(n, s), e.bufferData(n, r, a), t.onUploadCallback(), r instanceof Float32Array) o = 5126;
                    else if (r instanceof Uint16Array)
                        if (t.isFloat16BufferAttribute) {
                            if (!i) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                            o = 5131
                        } else o = 5123;
                    else if (r instanceof Int16Array) o = 5122;
                    else if (r instanceof Uint32Array) o = 5125;
                    else if (r instanceof Int32Array) o = 5124;
                    else if (r instanceof Int8Array) o = 5120;
                    else if (r instanceof Uint8Array) o = 5121;
                    else {
                        if (!(r instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
                        o = 5121
                    }
                    return {
                        buffer: s,
                        type: o,
                        bytesPerElement: r.BYTES_PER_ELEMENT,
                        version: t.version
                    }
                }(t, r)) : a.version < t.version && (! function(t, n, r) {
                    const a = n.array,
                        s = n.updateRange;
                    e.bindBuffer(r, t), -1 === s.count ? e.bufferSubData(r, 0, a) : (i ? e.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a, s.offset, s.count) : e.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a.subarray(s.offset, s.offset + s.count)), s.count = -1)
                }(a.buffer, t, r), a.version = t.version)
            }
        }
    }
    class Oi extends Jt {
        constructor(e = 1, t = 1, i = 1, n = 1) {
            super(), this.type = "PlaneGeometry", this.parameters = {
                width: e,
                height: t,
                widthSegments: i,
                heightSegments: n
            };
            const r = e / 2,
                a = t / 2,
                s = Math.floor(i),
                o = Math.floor(n),
                l = s + 1,
                c = o + 1,
                h = e / s,
                u = t / o,
                d = [],
                p = [],
                f = [],
                m = [];
            for (let e = 0; e < c; e++) {
                const t = e * u - a;
                for (let i = 0; i < l; i++) {
                    const n = i * h - r;
                    p.push(n, -t, 0), f.push(0, 0, 1), m.push(i / s), m.push(1 - e / o)
                }
            }
            for (let e = 0; e < o; e++)
                for (let t = 0; t < s; t++) {
                    const i = t + l * e,
                        n = t + l * (e + 1),
                        r = t + 1 + l * (e + 1),
                        a = t + 1 + l * e;
                    d.push(i, n, a), d.push(n, r, a)
                }
            this.setIndex(d), this.setAttribute("position", new Gt(p, 3)), this.setAttribute("normal", new Gt(f, 3)), this.setAttribute("uv", new Gt(m, 2))
        }
        static fromJSON(e) {
            return new Oi(e.width, e.height, e.widthSegments, e.heightSegments)
        }
    }
    const Ui = {
            alphamap_fragment: "#ifdef USE_ALPHAMAP\ndiffuseColor.a*=texture2D(alphaMap,vUv).g;\n#endif",
            alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\nuniform sampler2D alphaMap;\n#endif",
            alphatest_fragment: "#ifdef USE_ALPHATEST\nif(diffuseColor.a<alphaTest)discard;\n#endif",
            alphatest_pars_fragment: "#ifdef USE_ALPHATEST\nuniform float alphaTest;\n#endif",
            aomap_fragment: "#ifdef USE_AOMAP\nfloat ambientOcclusion=(texture2D(aoMap,vUv2).r-1.0)*aoMapIntensity+1.0;reflectedLight.indirectDiffuse*=ambientOcclusion;\n#if defined(USE_ENVMAP)&&defined(STANDARD)\nfloat dotNV=saturate(dot(geometry.normal,geometry.viewDir));reflectedLight.indirectSpecular*=computeSpecularOcclusion(dotNV,ambientOcclusion,material.roughness);\n#endif\n#endif",
            aomap_pars_fragment: "#ifdef USE_AOMAP\nuniform sampler2D aoMap;uniform float aoMapIntensity;\n#endif",
            begin_vertex: "vec3 transformed=vec3(position);",
            beginnormal_vertex: "vec3 objectNormal=vec3(normal);\n#ifdef USE_TANGENT\nvec3 objectTangent=vec3(tangent.xyz);\n#endif",
            bsdfs: "vec3 BRDF_Lambert(const in vec3 diffuseColor){return RECIPROCAL_PI*diffuseColor;}vec3 F_Schlick(const in vec3 f0,const in float f90,const in float dotVH){float fresnel=exp2((-5.55473*dotVH-6.98316)*dotVH);return f0*(1.0-fresnel)+(f90*fresnel);}float F_Schlick(const in float f0,const in float f90,const in float dotVH){float fresnel=exp2((-5.55473*dotVH-6.98316)*dotVH);return f0*(1.0-fresnel)+(f90*fresnel);}vec3 Schlick_to_F0(const in vec3 f,const in float f90,const in float dotVH){float x=clamp(1.0-dotVH,0.0,1.0);float x2=x*x;float x5=clamp(x*x2*x2,0.0,0.9999);return(f-vec3(f90)*x5)/(1.0-x5);}float V_GGX_SmithCorrelated(const in float alpha,const in float dotNL,const in float dotNV){float a2=pow2(alpha);float gv=dotNL*sqrt(a2+(1.0-a2)*pow2(dotNV));float gl=dotNV*sqrt(a2+(1.0-a2)*pow2(dotNL));return 0.5/max(gv+gl,EPSILON);}float D_GGX(const in float alpha,const in float dotNH){float a2=pow2(alpha);float denom=pow2(dotNH)*(a2-1.0)+1.0;return RECIPROCAL_PI*a2/pow2(denom);}vec3 BRDF_GGX(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in vec3 f0,const in float f90,const in float roughness){float alpha=pow2(roughness);vec3 halfDir=normalize(lightDir+viewDir);float dotNL=saturate(dot(normal,lightDir));float dotNV=saturate(dot(normal,viewDir));float dotNH=saturate(dot(normal,halfDir));float dotVH=saturate(dot(viewDir,halfDir));vec3 F=F_Schlick(f0,f90,dotVH);float V=V_GGX_SmithCorrelated(alpha,dotNL,dotNV);float D=D_GGX(alpha,dotNH);return F*(V*D);}\n#ifdef USE_IRIDESCENCE\nvec3 BRDF_GGX_Iridescence(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in vec3 f0,const in float f90,const in float iridescence,const in vec3 iridescenceFresnel,const in float roughness){float alpha=pow2(roughness);vec3 halfDir=normalize(lightDir+viewDir);float dotNL=saturate(dot(normal,lightDir));float dotNV=saturate(dot(normal,viewDir));float dotNH=saturate(dot(normal,halfDir));float dotVH=saturate(dot(viewDir,halfDir));vec3 F=mix(F_Schlick(f0,f90,dotVH),iridescenceFresnel,iridescence);float V=V_GGX_SmithCorrelated(alpha,dotNL,dotNV);float D=D_GGX(alpha,dotNH);return F*(V*D);}\n#endif\nvec2 LTC_Uv(const in vec3 N,const in vec3 V,const in float roughness){const float LUT_SIZE=64.0;const float LUT_SCALE=(LUT_SIZE-1.0)/LUT_SIZE;const float LUT_BIAS=0.5/LUT_SIZE;float dotNV=saturate(dot(N,V));vec2 uv=vec2(roughness,sqrt(1.0-dotNV));uv=uv*LUT_SCALE+LUT_BIAS;return uv;}float LTC_ClippedSphereFormFactor(const in vec3 f){float l=length(f);return max((l*l+f.z)/(l+1.0),0.0);}vec3 LTC_EdgeVectorFormFactor(const in vec3 v1,const in vec3 v2){float x=dot(v1,v2);float y=abs(x);float a=0.8543985+(0.4965155+0.0145206*y)*y;float b=3.4175940+(4.1616724+y)*y;float v=a/b;float theta_sintheta=(x>0.0)?v:0.5*inversesqrt(max(1.0-x*x,1e-7))-v;return cross(v1,v2)*theta_sintheta;}vec3 LTC_Evaluate(const in vec3 N,const in vec3 V,const in vec3 P,const in mat3 mInv,const in vec3 rectCoords[4]){vec3 v1=rectCoords[1]-rectCoords[0];vec3 v2=rectCoords[3]-rectCoords[0];vec3 lightNormal=cross(v1,v2);if(dot(lightNormal,P-rectCoords[0])<0.0)return vec3(0.0);vec3 T1,T2;T1=normalize(V-N*dot(V,N));T2=-cross(N,T1);mat3 mat=mInv*transposeMat3(mat3(T1,T2,N));vec3 coords[4];coords[0]=mat*(rectCoords[0]-P);coords[1]=mat*(rectCoords[1]-P);coords[2]=mat*(rectCoords[2]-P);coords[3]=mat*(rectCoords[3]-P);coords[0]=normalize(coords[0]);coords[1]=normalize(coords[1]);coords[2]=normalize(coords[2]);coords[3]=normalize(coords[3]);vec3 vectorFormFactor=vec3(0.0);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[0],coords[1]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[1],coords[2]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[2],coords[3]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[3],coords[0]);float result=LTC_ClippedSphereFormFactor(vectorFormFactor);return vec3(result);}float G_BlinnPhong_Implicit(){return 0.25;}float D_BlinnPhong(const in float shininess,const in float dotNH){return RECIPROCAL_PI*(shininess*0.5+1.0)*pow(dotNH,shininess);}vec3 BRDF_BlinnPhong(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in vec3 specularColor,const in float shininess){vec3 halfDir=normalize(lightDir+viewDir);float dotNH=saturate(dot(normal,halfDir));float dotVH=saturate(dot(viewDir,halfDir));vec3 F=F_Schlick(specularColor,1.0,dotVH);float G=G_BlinnPhong_Implicit();float D=D_BlinnPhong(shininess,dotNH);return F*(G*D);}\n#if defined(USE_SHEEN)\nfloat D_Charlie(float roughness,float dotNH){float alpha=pow2(roughness);float invAlpha=1.0/alpha;float cos2h=dotNH*dotNH;float sin2h=max(1.0-cos2h,0.0078125);return(2.0+invAlpha)*pow(sin2h,invAlpha*0.5)/(2.0*PI);}float V_Neubelt(float dotNV,float dotNL){return saturate(1.0/(4.0*(dotNL+dotNV-dotNL*dotNV)));}vec3 BRDF_Sheen(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,vec3 sheenColor,const in float sheenRoughness){vec3 halfDir=normalize(lightDir+viewDir);float dotNL=saturate(dot(normal,lightDir));float dotNV=saturate(dot(normal,viewDir));float dotNH=saturate(dot(normal,halfDir));float D=D_Charlie(sheenRoughness,dotNH);float V=V_Neubelt(dotNV,dotNL);return sheenColor*(D*V);}\n#endif",
            iridescence_fragment: "#ifdef USE_IRIDESCENCE\nconst mat3 XYZ_TO_REC709=mat3(3.2404542,-0.9692660,0.0556434,-1.5371385,1.8760108,-0.2040259,-0.4985314,0.0415560,1.0572252);vec3 Fresnel0ToIor(vec3 fresnel0){vec3 sqrtF0=sqrt(fresnel0);return(vec3(1.0)+sqrtF0)/(vec3(1.0)-sqrtF0);}vec3 IorToFresnel0(vec3 transmittedIor,float incidentIor){return pow2((transmittedIor-vec3(incidentIor))/(transmittedIor+vec3(incidentIor)));}float IorToFresnel0(float transmittedIor,float incidentIor){return pow2((transmittedIor-incidentIor)/(transmittedIor+incidentIor));}vec3 evalSensitivity(float OPD,vec3 shift){float phase=2.0*PI*OPD*1.0e-9;vec3 val=vec3(5.4856e-13,4.4201e-13,5.2481e-13);vec3 pos=vec3(1.6810e+06,1.7953e+06,2.2084e+06);vec3 var=vec3(4.3278e+09,9.3046e+09,6.6121e+09);vec3 xyz=val*sqrt(2.0*PI*var)*cos(pos*phase+shift)*exp(-pow2(phase)*var);xyz.x+=9.7470e-14*sqrt(2.0*PI*4.5282e+09)*cos(2.2399e+06*phase+shift[0])*exp(-4.5282e+09*pow2(phase));xyz/=1.0685e-7;vec3 srgb=XYZ_TO_REC709*xyz;return srgb;}vec3 evalIridescence(float outsideIOR,float eta2,float cosTheta1,float thinFilmThickness,vec3 baseF0){vec3 I;float iridescenceIOR=mix(outsideIOR,eta2,smoothstep(0.0,0.03,thinFilmThickness));float sinTheta2Sq=pow2(outsideIOR/iridescenceIOR)*(1.0-pow2(cosTheta1));float cosTheta2Sq=1.0-sinTheta2Sq;if(cosTheta2Sq<0.0){return vec3(1.0);}float cosTheta2=sqrt(cosTheta2Sq);float R0=IorToFresnel0(iridescenceIOR,outsideIOR);float R12=F_Schlick(R0,1.0,cosTheta1);float R21=R12;float T121=1.0-R12;float phi12=0.0;if(iridescenceIOR<outsideIOR)phi12=PI;float phi21=PI-phi12;vec3 baseIOR=Fresnel0ToIor(clamp(baseF0,0.0,0.9999));vec3 R1=IorToFresnel0(baseIOR,iridescenceIOR);vec3 R23=F_Schlick(R1,1.0,cosTheta2);vec3 phi23=vec3(0.0);if(baseIOR[0]<iridescenceIOR)phi23[0]=PI;if(baseIOR[1]<iridescenceIOR)phi23[1]=PI;if(baseIOR[2]<iridescenceIOR)phi23[2]=PI;float OPD=2.0*iridescenceIOR*thinFilmThickness*cosTheta2;vec3 phi=vec3(phi21)+phi23;vec3 R123=clamp(R12*R23,1e-5,0.9999);vec3 r123=sqrt(R123);vec3 Rs=pow2(T121)*R23/(vec3(1.0)-R123);vec3 C0=R12+Rs;I=C0;vec3 Cm=Rs-T121;for(int m=1;m<=2;++m){Cm*=r123;vec3 Sm=2.0*evalSensitivity(float(m)*OPD,float(m)*phi);I+=Cm*Sm;}return max(I,vec3(0.0));}\n#endif",
            bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;uniform float bumpScale;vec2 dHdxy_fwd(){vec2 dSTdx=dFdx(vUv);vec2 dSTdy=dFdy(vUv);float Hll=bumpScale*texture2D(bumpMap,vUv).x;float dBx=bumpScale*texture2D(bumpMap,vUv+dSTdx).x-Hll;float dBy=bumpScale*texture2D(bumpMap,vUv+dSTdy).x-Hll;return vec2(dBx,dBy);}vec3 perturbNormalArb(vec3 surf_pos,vec3 surf_norm,vec2 dHdxy,float faceDirection){vec3 vSigmaX=vec3(dFdx(surf_pos.x),dFdx(surf_pos.y),dFdx(surf_pos.z));vec3 vSigmaY=vec3(dFdy(surf_pos.x),dFdy(surf_pos.y),dFdy(surf_pos.z));vec3 vN=surf_norm;vec3 R1=cross(vSigmaY,vN);vec3 R2=cross(vN,vSigmaX);float fDet=dot(vSigmaX,R1)*faceDirection;vec3 vGrad=sign(fDet)*(dHdxy.x*R1+dHdxy.y*R2);return normalize(abs(fDet)*surf_norm-vGrad);}\n#endif",
            clipping_planes_fragment: "#if NUM_CLIPPING_PLANES>0\nvec4 plane;\n#pragma unroll_loop_start\nfor(int i=0;i<UNION_CLIPPING_PLANES;i++){plane=clippingPlanes[i];if(dot(vClipPosition,plane.xyz)>plane.w)discard;}\n#pragma unroll_loop_end\n#if UNION_CLIPPING_PLANES<NUM_CLIPPING_PLANES\nbool clipped=true;\n#pragma unroll_loop_start\nfor(int i=UNION_CLIPPING_PLANES;i<NUM_CLIPPING_PLANES;i++){plane=clippingPlanes[i];clipped=(dot(vClipPosition,plane.xyz)>plane.w)&&clipped;}\n#pragma unroll_loop_end\nif(clipped)discard;\n#endif\n#endif",
            clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES>0\nvarying vec3 vClipPosition;uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];\n#endif",
            clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES>0\nvarying vec3 vClipPosition;\n#endif",
            clipping_planes_vertex: "#if NUM_CLIPPING_PLANES>0\nvClipPosition=-mvPosition.xyz;\n#endif",
            color_fragment: "#if defined(USE_COLOR_ALPHA)\ndiffuseColor*=vColor;\n#elif defined(USE_COLOR)\ndiffuseColor.rgb*=vColor;\n#endif",
            color_pars_fragment: "#if defined(USE_COLOR_ALPHA)\nvarying vec4 vColor;\n#elif defined(USE_COLOR)\nvarying vec3 vColor;\n#endif",
            color_pars_vertex: "#if defined(USE_COLOR_ALPHA)\nvarying vec4 vColor;\n#elif defined(USE_COLOR)||defined(USE_INSTANCING_COLOR)\nvarying vec3 vColor;\n#endif",
            color_vertex: "#if defined(USE_COLOR_ALPHA)\nvColor=vec4(1.0);\n#elif defined(USE_COLOR)||defined(USE_INSTANCING_COLOR)\nvColor=vec3(1.0);\n#endif\n#ifdef USE_COLOR\nvColor*=color;\n#endif\n#ifdef USE_INSTANCING_COLOR\nvColor.xyz*=instanceColor.xyz;\n#endif",
            common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a)clamp(a,0.0,1.0)\n#endif\n#define whiteComplement(a)(1.0-saturate(a))\nfloat pow2(const in float x){return x*x;}vec3 pow2(const in vec3 x){return x*x;}float pow3(const in float x){return x*x*x;}float pow4(const in float x){float x2=x*x;return x2*x2;}float max3(const in vec3 v){return max(max(v.x,v.y),v.z);}float average(const in vec3 color){return dot(color,vec3(0.3333));}highp float rand(const in vec2 uv){const highp float a=12.9898,b=78.233,c=43758.5453;highp float dt=dot(uv.xy,vec2(a,b)),sn=mod(dt,PI);return fract(sin(sn)*c);}\n#ifdef HIGH_PRECISION\nfloat precisionSafeLength(vec3 v){return length(v);}\n#else\nfloat precisionSafeLength(vec3 v){float maxComponent=max3(abs(v));return length(v/maxComponent)*maxComponent;}\n#endif\nstruct IncidentLight{vec3 color;vec3 direction;bool visible;};struct ReflectedLight{vec3 directDiffuse;vec3 directSpecular;vec3 indirectDiffuse;vec3 indirectSpecular;};struct GeometricContext{vec3 position;vec3 normal;vec3 viewDir;\n#ifdef USE_CLEARCOAT\nvec3 clearcoatNormal;\n#endif\n};vec3 transformDirection(in vec3 dir,in mat4 matrix){return normalize((matrix*vec4(dir,0.0)).xyz);}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}mat3 transposeMat3(const in mat3 m){mat3 tmp;tmp[0]=vec3(m[0].x,m[1].x,m[2].x);tmp[1]=vec3(m[0].y,m[1].y,m[2].y);tmp[2]=vec3(m[0].z,m[1].z,m[2].z);return tmp;}float linearToRelativeLuminance(const in vec3 color){vec3 weights=vec3(0.2126,0.7152,0.0722);return dot(weights,color.rgb);}bool isPerspectiveMatrix(mat4 m){return m[2][3]==-1.0;}vec2 equirectUv(in vec3 dir){float u=atan(dir.z,dir.x)*RECIPROCAL_PI2+0.5;float v=asin(clamp(dir.y,-1.0,1.0))*RECIPROCAL_PI+0.5;return vec2(u,v);}",
            cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction){vec3 absDirection=abs(direction);float face=-1.0;if(absDirection.x>absDirection.z){if(absDirection.x>absDirection.y)face=direction.x>0.0?0.0:3.0;else face=direction.y>0.0?1.0:4.0;}else{if(absDirection.z>absDirection.y)face=direction.z>0.0?2.0:5.0;else face=direction.y>0.0?1.0:4.0;}return face;}vec2 getUV(vec3 direction,float face){vec2 uv;if(face==0.0){uv=vec2(direction.z,direction.y)/abs(direction.x);}else if(face==1.0){uv=vec2(-direction.x,-direction.z)/abs(direction.y);}else if(face==2.0){uv=vec2(-direction.x,direction.y)/abs(direction.z);}else if(face==3.0){uv=vec2(-direction.z,direction.y)/abs(direction.x);}else if(face==4.0){uv=vec2(-direction.x,direction.z)/abs(direction.y);}else{uv=vec2(direction.x,direction.y)/abs(direction.z);}return 0.5*(uv+1.0);}vec3 bilinearCubeUV(sampler2D envMap,vec3 direction,float mipInt){float face=getFace(direction);float filterInt=max(cubeUV_minMipLevel-mipInt,0.0);mipInt=max(mipInt,cubeUV_minMipLevel);float faceSize=exp2(mipInt);vec2 uv=getUV(direction,face)*(faceSize-2.0)+1.0;if(face>2.0){uv.y+=faceSize;face-=3.0;}uv.x+=face*faceSize;uv.x+=filterInt*3.0*cubeUV_minTileSize;uv.y+=4.0*(exp2(CUBEUV_MAX_MIP)-faceSize);uv.x*=CUBEUV_TEXEL_WIDTH;uv.y*=CUBEUV_TEXEL_HEIGHT;\n#ifdef texture2DGradEXT\nreturn texture2DGradEXT(envMap,uv,vec2(0.0),vec2(0.0)).rgb;\n#else\nreturn texture2D(envMap,uv).rgb;\n#endif\n}\n#define r0 1.0\n#define v0 0.339\n#define m0-2.0\n#define r1 0.8\n#define v1 0.276\n#define m1-1.0\n#define r4 0.4\n#define v4 0.046\n#define m4 2.0\n#define r5 0.305\n#define v5 0.016\n#define m5 3.0\n#define r6 0.21\n#define v6 0.0038\n#define m6 4.0\nfloat roughnessToMip(float roughness){float mip=0.0;if(roughness>=r1){mip=(r0-roughness)*(m1-m0)/(r0-r1)+m0;}else if(roughness>=r4){mip=(r1-roughness)*(m4-m1)/(r1-r4)+m1;}else if(roughness>=r5){mip=(r4-roughness)*(m5-m4)/(r4-r5)+m4;}else if(roughness>=r6){mip=(r5-roughness)*(m6-m5)/(r5-r6)+m5;}else{mip=-2.0*log2(1.16*roughness);}return mip;}vec4 textureCubeUV(sampler2D envMap,vec3 sampleDir,float roughness){float mip=clamp(roughnessToMip(roughness),m0,CUBEUV_MAX_MIP);float mipF=fract(mip);float mipInt=floor(mip);vec3 color0=bilinearCubeUV(envMap,sampleDir,mipInt);if(mipF==0.0){return vec4(color0,1.0);}else{vec3 color1=bilinearCubeUV(envMap,sampleDir,mipInt+1.0);return vec4(mix(color0,color1,mipF),1.0);}}\n#endif",
            defaultnormal_vertex: "vec3 transformedNormal=objectNormal;\n#ifdef USE_INSTANCING\nmat3 m=mat3(instanceMatrix);transformedNormal/=vec3(dot(m[0],m[0]),dot(m[1],m[1]),dot(m[2],m[2]));transformedNormal=m*transformedNormal;\n#endif\ntransformedNormal=normalMatrix*transformedNormal;\n#ifdef FLIP_SIDED\ntransformedNormal=-transformedNormal;\n#endif\n#ifdef USE_TANGENT\nvec3 transformedTangent=(modelViewMatrix*vec4(objectTangent,0.0)).xyz;\n#ifdef FLIP_SIDED\ntransformedTangent=-transformedTangent;\n#endif\n#endif",
            displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\nuniform sampler2D displacementMap;uniform float displacementScale;uniform float displacementBias;\n#endif",
            displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\ntransformed+=normalize(objectNormal)*(texture2D(displacementMap,vUv).x*displacementScale+displacementBias);\n#endif",
            emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\nvec4 emissiveColor=texture2D(emissiveMap,vUv);totalEmissiveRadiance*=emissiveColor.rgb;\n#endif",
            emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\nuniform sampler2D emissiveMap;\n#endif",
            encodings_fragment: "gl_FragColor=linearToOutputTexel(gl_FragColor);",
            encodings_pars_fragment: "vec4 LinearToLinear(in vec4 value){return value;}vec4 LinearTosRGB(in vec4 value){return vec4(mix(pow(value.rgb,vec3(0.41666))*1.055-vec3(0.055),value.rgb*12.92,vec3(lessThanEqual(value.rgb,vec3(0.0031308)))),value.a);}",
            envmap_fragment: "#ifdef USE_ENVMAP\n#ifdef ENV_WORLDPOS\nvec3 cameraToFrag;if(isOrthographic){cameraToFrag=normalize(vec3(-viewMatrix[0][2],-viewMatrix[1][2],-viewMatrix[2][2]));}else{cameraToFrag=normalize(vWorldPosition-cameraPosition);}vec3 worldNormal=inverseTransformDirection(normal,viewMatrix);\n#ifdef ENVMAP_MODE_REFLECTION\nvec3 reflectVec=reflect(cameraToFrag,worldNormal);\n#else\nvec3 reflectVec=refract(cameraToFrag,worldNormal,refractionRatio);\n#endif\n#else\nvec3 reflectVec=vReflect;\n#endif\n#ifdef ENVMAP_TYPE_CUBE\nvec4 envColor=textureCube(envMap,vec3(flipEnvMap*reflectVec.x,reflectVec.yz));\n#elif defined(ENVMAP_TYPE_CUBE_UV)\nvec4 envColor=textureCubeUV(envMap,reflectVec,0.0);\n#else\nvec4 envColor=vec4(0.0);\n#endif\n#ifdef ENVMAP_BLENDING_MULTIPLY\noutgoingLight=mix(outgoingLight,outgoingLight*envColor.xyz,specularStrength*reflectivity);\n#elif defined(ENVMAP_BLENDING_MIX)\noutgoingLight=mix(outgoingLight,envColor.xyz,specularStrength*reflectivity);\n#elif defined(ENVMAP_BLENDING_ADD)\noutgoingLight+=envColor.xyz*specularStrength*reflectivity;\n#endif\n#endif",
            envmap_common_pars_fragment: "#ifdef USE_ENVMAP\nuniform float envMapIntensity;uniform float flipEnvMap;\n#ifdef ENVMAP_TYPE_CUBE\nuniform samplerCube envMap;\n#else\nuniform sampler2D envMap;\n#endif\n#endif",
            envmap_pars_fragment: "#ifdef USE_ENVMAP\nuniform float reflectivity;\n#if defined(USE_BUMPMAP)||defined(USE_NORMALMAP)||defined(PHONG)\n#define ENV_WORLDPOS\n#endif\n#ifdef ENV_WORLDPOS\nvarying vec3 vWorldPosition;uniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif",
            envmap_pars_vertex: "#ifdef USE_ENVMAP\n#if defined(USE_BUMPMAP)||defined(USE_NORMALMAP)||defined(PHONG)\n#define ENV_WORLDPOS\n#endif\n#ifdef ENV_WORLDPOS\nvarying vec3 vWorldPosition;\n#else\nvarying vec3 vReflect;uniform float refractionRatio;\n#endif\n#endif",
            envmap_physical_pars_fragment: "#if defined(USE_ENVMAP)\nvec3 getIBLIrradiance(const in vec3 normal){\n#if defined(ENVMAP_TYPE_CUBE_UV)\nvec3 worldNormal=inverseTransformDirection(normal,viewMatrix);vec4 envMapColor=textureCubeUV(envMap,worldNormal,1.0);return PI*envMapColor.rgb*envMapIntensity;\n#else\nreturn vec3(0.0);\n#endif\n}vec3 getIBLRadiance(const in vec3 viewDir,const in vec3 normal,const in float roughness){\n#if defined(ENVMAP_TYPE_CUBE_UV)\nvec3 reflectVec=reflect(-viewDir,normal);reflectVec=normalize(mix(reflectVec,normal,roughness*roughness));reflectVec=inverseTransformDirection(reflectVec,viewMatrix);vec4 envMapColor=textureCubeUV(envMap,reflectVec,roughness);return envMapColor.rgb*envMapIntensity;\n#else\nreturn vec3(0.0);\n#endif\n}\n#endif",
            envmap_vertex: "#ifdef USE_ENVMAP\n#ifdef ENV_WORLDPOS\nvWorldPosition=worldPosition.xyz;\n#else\nvec3 cameraToVertex;if(isOrthographic){cameraToVertex=normalize(vec3(-viewMatrix[0][2],-viewMatrix[1][2],-viewMatrix[2][2]));}else{cameraToVertex=normalize(worldPosition.xyz-cameraPosition);}vec3 worldNormal=inverseTransformDirection(transformedNormal,viewMatrix);\n#ifdef ENVMAP_MODE_REFLECTION\nvReflect=reflect(cameraToVertex,worldNormal);\n#else\nvReflect=refract(cameraToVertex,worldNormal,refractionRatio);\n#endif\n#endif\n#endif",
            fog_vertex: "#ifdef USE_FOG\nvFogDepth=-mvPosition.z;\n#endif",
            fog_pars_vertex: "#ifdef USE_FOG\nvarying float vFogDepth;\n#endif",
            fog_fragment: "#ifdef USE_FOG\n#ifdef FOG_EXP2\nfloat fogFactor=1.0-exp(-fogDensity*fogDensity*vFogDepth*vFogDepth);\n#else\nfloat fogFactor=smoothstep(fogNear,fogFar,vFogDepth);\n#endif\ngl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor,fogFactor);\n#endif",
            fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;varying float vFogDepth;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;uniform float fogFar;\n#endif\n#endif",
            gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\nuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance(vec3 normal,vec3 lightDirection){float dotNL=dot(normal,lightDirection);vec2 coord=vec2(dotNL*0.5+0.5,0.0);\n#ifdef USE_GRADIENTMAP\nreturn vec3(texture2D(gradientMap,coord).r);\n#else\nreturn(coord.x<0.7)?vec3(0.7):vec3(1.0);\n#endif\n}",
            lightmap_fragment: "#ifdef USE_LIGHTMAP\nvec4 lightMapTexel=texture2D(lightMap,vUv2);vec3 lightMapIrradiance=lightMapTexel.rgb*lightMapIntensity;reflectedLight.indirectDiffuse+=lightMapIrradiance;\n#endif",
            lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\nuniform sampler2D lightMap;uniform float lightMapIntensity;\n#endif",
            lights_lambert_vertex: "vec3 diffuse=vec3(1.0);GeometricContext geometry;geometry.position=mvPosition.xyz;geometry.normal=normalize(transformedNormal);geometry.viewDir=(isOrthographic)?vec3(0,0,1):normalize(-mvPosition.xyz);GeometricContext backGeometry;backGeometry.position=geometry.position;backGeometry.normal=-geometry.normal;backGeometry.viewDir=geometry.viewDir;vLightFront=vec3(0.0);vIndirectFront=vec3(0.0);\n#ifdef DOUBLE_SIDED\nvLightBack=vec3(0.0);vIndirectBack=vec3(0.0);\n#endif\nIncidentLight directLight;float dotNL;vec3 directLightColor_Diffuse;vIndirectFront+=getAmbientLightIrradiance(ambientLightColor);vIndirectFront+=getLightProbeIrradiance(lightProbe,geometry.normal);\n#ifdef DOUBLE_SIDED\nvIndirectBack+=getAmbientLightIrradiance(ambientLightColor);vIndirectBack+=getLightProbeIrradiance(lightProbe,backGeometry.normal);\n#endif\n#if NUM_POINT_LIGHTS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHTS;i++){getPointLightInfo(pointLights[i],geometry,directLight);dotNL=dot(geometry.normal,directLight.direction);directLightColor_Diffuse=directLight.color;vLightFront+=saturate(dotNL)*directLightColor_Diffuse;\n#ifdef DOUBLE_SIDED\nvLightBack+=saturate(-dotNL)*directLightColor_Diffuse;\n#endif\n}\n#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHTS;i++){getSpotLightInfo(spotLights[i],geometry,directLight);dotNL=dot(geometry.normal,directLight.direction);directLightColor_Diffuse=directLight.color;vLightFront+=saturate(dotNL)*directLightColor_Diffuse;\n#ifdef DOUBLE_SIDED\nvLightBack+=saturate(-dotNL)*directLightColor_Diffuse;\n#endif\n}\n#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHTS;i++){getDirectionalLightInfo(directionalLights[i],geometry,directLight);dotNL=dot(geometry.normal,directLight.direction);directLightColor_Diffuse=directLight.color;vLightFront+=saturate(dotNL)*directLightColor_Diffuse;\n#ifdef DOUBLE_SIDED\nvLightBack+=saturate(-dotNL)*directLightColor_Diffuse;\n#endif\n}\n#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_HEMI_LIGHTS;i++){vIndirectFront+=getHemisphereLightIrradiance(hemisphereLights[i],geometry.normal);\n#ifdef DOUBLE_SIDED\nvIndirectBack+=getHemisphereLightIrradiance(hemisphereLights[i],backGeometry.normal);\n#endif\n}\n#pragma unroll_loop_end\n#endif",
            lights_pars_begin: "uniform bool receiveShadow;uniform vec3 ambientLightColor;uniform vec3 lightProbe[9];vec3 shGetIrradianceAt(in vec3 normal,in vec3 shCoefficients[9]){float x=normal.x,y=normal.y,z=normal.z;vec3 result=shCoefficients[0]*0.886227;result+=shCoefficients[1]*2.0*0.511664*y;result+=shCoefficients[2]*2.0*0.511664*z;result+=shCoefficients[3]*2.0*0.511664*x;result+=shCoefficients[4]*2.0*0.429043*x*y;result+=shCoefficients[5]*2.0*0.429043*y*z;result+=shCoefficients[6]*(0.743125*z*z-0.247708);result+=shCoefficients[7]*2.0*0.429043*x*z;result+=shCoefficients[8]*0.429043*(x*x-y*y);return result;}vec3 getLightProbeIrradiance(const in vec3 lightProbe[9],const in vec3 normal){vec3 worldNormal=inverseTransformDirection(normal,viewMatrix);vec3 irradiance=shGetIrradianceAt(worldNormal,lightProbe);return irradiance;}vec3 getAmbientLightIrradiance(const in vec3 ambientLightColor){vec3 irradiance=ambientLightColor;return irradiance;}float getDistanceAttenuation(const in float lightDistance,const in float cutoffDistance,const in float decayExponent){\n#if defined(PHYSICALLY_CORRECT_LIGHTS)\nfloat distanceFalloff=1.0/max(pow(lightDistance,decayExponent),0.01);if(cutoffDistance>0.0){distanceFalloff*=pow2(saturate(1.0-pow4(lightDistance/cutoffDistance)));}return distanceFalloff;\n#else\nif(cutoffDistance>0.0&&decayExponent>0.0){return pow(saturate(-lightDistance/cutoffDistance+1.0),decayExponent);}return 1.0;\n#endif\n}float getSpotAttenuation(const in float coneCosine,const in float penumbraCosine,const in float angleCosine){return smoothstep(coneCosine,penumbraCosine,angleCosine);}\n#if NUM_DIR_LIGHTS>0\nstruct DirectionalLight{vec3 direction;vec3 color;};uniform DirectionalLight directionalLights[NUM_DIR_LIGHTS];void getDirectionalLightInfo(const in DirectionalLight directionalLight,const in GeometricContext geometry,out IncidentLight light){light.color=directionalLight.color;light.direction=directionalLight.direction;light.visible=true;}\n#endif\n#if NUM_POINT_LIGHTS>0\nstruct PointLight{vec3 position;vec3 color;float distance;float decay;};uniform PointLight pointLights[NUM_POINT_LIGHTS];void getPointLightInfo(const in PointLight pointLight,const in GeometricContext geometry,out IncidentLight light){vec3 lVector=pointLight.position-geometry.position;light.direction=normalize(lVector);float lightDistance=length(lVector);light.color=pointLight.color;light.color*=getDistanceAttenuation(lightDistance,pointLight.distance,pointLight.decay);light.visible=(light.color!=vec3(0.0));}\n#endif\n#if NUM_SPOT_LIGHTS>0\nstruct SpotLight{vec3 position;vec3 direction;vec3 color;float distance;float decay;float coneCos;float penumbraCos;};uniform SpotLight spotLights[NUM_SPOT_LIGHTS];void getSpotLightInfo(const in SpotLight spotLight,const in GeometricContext geometry,out IncidentLight light){vec3 lVector=spotLight.position-geometry.position;light.direction=normalize(lVector);float angleCos=dot(light.direction,spotLight.direction);float spotAttenuation=getSpotAttenuation(spotLight.coneCos,spotLight.penumbraCos,angleCos);if(spotAttenuation>0.0){float lightDistance=length(lVector);light.color=spotLight.color*spotAttenuation;light.color*=getDistanceAttenuation(lightDistance,spotLight.distance,spotLight.decay);light.visible=(light.color!=vec3(0.0));}else{light.color=vec3(0.0);light.visible=false;}}\n#endif\n#if NUM_RECT_AREA_LIGHTS>0\nstruct RectAreaLight{vec3 color;vec3 position;vec3 halfWidth;vec3 halfHeight;};uniform sampler2D ltc_1;uniform sampler2D ltc_2;uniform RectAreaLight rectAreaLights[NUM_RECT_AREA_LIGHTS];\n#endif\n#if NUM_HEMI_LIGHTS>0\nstruct HemisphereLight{vec3 direction;vec3 skyColor;vec3 groundColor;};uniform HemisphereLight hemisphereLights[NUM_HEMI_LIGHTS];vec3 getHemisphereLightIrradiance(const in HemisphereLight hemiLight,const in vec3 normal){float dotNL=dot(normal,hemiLight.direction);float hemiDiffuseWeight=0.5*dotNL+0.5;vec3 irradiance=mix(hemiLight.groundColor,hemiLight.skyColor,hemiDiffuseWeight);return irradiance;}\n#endif",
            lights_toon_fragment: "ToonMaterial material;material.diffuseColor=diffuseColor.rgb;",
            lights_toon_pars_fragment: "varying vec3 vViewPosition;struct ToonMaterial{vec3 diffuseColor;};void RE_Direct_Toon(const in IncidentLight directLight,const in GeometricContext geometry,const in ToonMaterial material,inout ReflectedLight reflectedLight){vec3 irradiance=getGradientIrradiance(geometry.normal,directLight.direction)*directLight.color;reflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectDiffuse_Toon(const in vec3 irradiance,const in GeometricContext geometry,const in ToonMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}\n#define RE_Direct RE_Direct_Toon\n#define RE_IndirectDiffuse RE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD(material)(0)",
            lights_phong_fragment: "BlinnPhongMaterial material;material.diffuseColor=diffuseColor.rgb;material.specularColor=specular;material.specularShininess=shininess;material.specularStrength=specularStrength;",
            lights_phong_pars_fragment: "varying vec3 vViewPosition;struct BlinnPhongMaterial{vec3 diffuseColor;vec3 specularColor;float specularShininess;float specularStrength;};void RE_Direct_BlinnPhong(const in IncidentLight directLight,const in GeometricContext geometry,const in BlinnPhongMaterial material,inout ReflectedLight reflectedLight){float dotNL=saturate(dot(geometry.normal,directLight.direction));vec3 irradiance=dotNL*directLight.color;reflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);reflectedLight.directSpecular+=irradiance*BRDF_BlinnPhong(directLight.direction,geometry.viewDir,geometry.normal,material.specularColor,material.specularShininess)*material.specularStrength;}void RE_IndirectDiffuse_BlinnPhong(const in vec3 irradiance,const in GeometricContext geometry,const in BlinnPhongMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}\n#define RE_Direct RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD(material)(0)",
            lights_physical_fragment: "PhysicalMaterial material;material.diffuseColor=diffuseColor.rgb*(1.0-metalnessFactor);vec3 dxy=max(abs(dFdx(geometryNormal)),abs(dFdy(geometryNormal)));float geometryRoughness=max(max(dxy.x,dxy.y),dxy.z);material.roughness=max(roughnessFactor,0.0525);material.roughness+=geometryRoughness;material.roughness=min(material.roughness,1.0);\n#ifdef IOR\n#ifdef SPECULAR\nfloat specularIntensityFactor=specularIntensity;vec3 specularColorFactor=specularColor;\n#ifdef USE_SPECULARINTENSITYMAP\nspecularIntensityFactor*=texture2D(specularIntensityMap,vUv).a;\n#endif\n#ifdef USE_SPECULARCOLORMAP\nspecularColorFactor*=texture2D(specularColorMap,vUv).rgb;\n#endif\nmaterial.specularF90=mix(specularIntensityFactor,1.0,metalnessFactor);\n#else\nfloat specularIntensityFactor=1.0;vec3 specularColorFactor=vec3(1.0);material.specularF90=1.0;\n#endif\nmaterial.specularColor=mix(min(pow2((ior-1.0)/(ior+1.0))*specularColorFactor,vec3(1.0))*specularIntensityFactor,diffuseColor.rgb,metalnessFactor);\n#else\nmaterial.specularColor=mix(vec3(0.04),diffuseColor.rgb,metalnessFactor);material.specularF90=1.0;\n#endif\n#ifdef USE_CLEARCOAT\nmaterial.clearcoat=clearcoat;material.clearcoatRoughness=clearcoatRoughness;material.clearcoatF0=vec3(0.04);material.clearcoatF90=1.0;\n#ifdef USE_CLEARCOATMAP\nmaterial.clearcoat*=texture2D(clearcoatMap,vUv).x;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\nmaterial.clearcoatRoughness*=texture2D(clearcoatRoughnessMap,vUv).y;\n#endif\nmaterial.clearcoat=saturate(material.clearcoat);material.clearcoatRoughness=max(material.clearcoatRoughness,0.0525);material.clearcoatRoughness+=geometryRoughness;material.clearcoatRoughness=min(material.clearcoatRoughness,1.0);\n#endif\n#ifdef USE_IRIDESCENCE\nmaterial.iridescence=iridescence;material.iridescenceIOR=iridescenceIOR;\n#ifdef USE_IRIDESCENCEMAP\nmaterial.iridescence*=texture2D(iridescenceMap,vUv).r;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\nmaterial.iridescenceThickness=(iridescenceThicknessMaximum-iridescenceThicknessMinimum)*texture2D(iridescenceThicknessMap,vUv).g+iridescenceThicknessMinimum;\n#else\nmaterial.iridescenceThickness=iridescenceThicknessMaximum;\n#endif\n#endif\n#ifdef USE_SHEEN\nmaterial.sheenColor=sheenColor;\n#ifdef USE_SHEENCOLORMAP\nmaterial.sheenColor*=texture2D(sheenColorMap,vUv).rgb;\n#endif\nmaterial.sheenRoughness=clamp(sheenRoughness,0.07,1.0);\n#ifdef USE_SHEENROUGHNESSMAP\nmaterial.sheenRoughness*=texture2D(sheenRoughnessMap,vUv).a;\n#endif\n#endif",
            lights_physical_pars_fragment: "struct PhysicalMaterial{vec3 diffuseColor;float roughness;vec3 specularColor;float specularF90;\n#ifdef USE_CLEARCOAT\nfloat clearcoat;float clearcoatRoughness;vec3 clearcoatF0;float clearcoatF90;\n#endif\n#ifdef USE_IRIDESCENCE\nfloat iridescence;float iridescenceIOR;float iridescenceThickness;vec3 iridescenceFresnel;vec3 iridescenceF0;\n#endif\n#ifdef USE_SHEEN\nvec3 sheenColor;float sheenRoughness;\n#endif\n};vec3 clearcoatSpecular=vec3(0.0);vec3 sheenSpecular=vec3(0.0);float IBLSheenBRDF(const in vec3 normal,const in vec3 viewDir,const in float roughness){float dotNV=saturate(dot(normal,viewDir));float r2=roughness*roughness;float a=roughness<0.25?-339.2*r2+161.4*roughness-25.9:-8.48*r2+14.3*roughness-9.95;float b=roughness<0.25?44.0*r2-23.7*roughness+3.26:1.97*r2-3.27*roughness+0.72;float DG=exp(a*dotNV+b)+(roughness<0.25?0.0:0.1*(roughness-0.25));return saturate(DG*RECIPROCAL_PI);}vec2 DFGApprox(const in vec3 normal,const in vec3 viewDir,const in float roughness){float dotNV=saturate(dot(normal,viewDir));const vec4 c0=vec4(-1,-0.0275,-0.572,0.022);const vec4 c1=vec4(1,0.0425,1.04,-0.04);vec4 r=roughness*c0+c1;float a004=min(r.x*r.x,exp2(-9.28*dotNV))*r.x+r.y;vec2 fab=vec2(-1.04,1.04)*a004+r.zw;return fab;}vec3 EnvironmentBRDF(const in vec3 normal,const in vec3 viewDir,const in vec3 specularColor,const in float specularF90,const in float roughness){vec2 fab=DFGApprox(normal,viewDir,roughness);return specularColor*fab.x+specularF90*fab.y;}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence(const in vec3 normal,const in vec3 viewDir,const in vec3 specularColor,const in float specularF90,const in float iridescence,const in vec3 iridescenceF0,const in float roughness,inout vec3 singleScatter,inout vec3 multiScatter){\n#else\nvoid computeMultiscattering(const in vec3 normal,const in vec3 viewDir,const in vec3 specularColor,const in float specularF90,const in float roughness,inout vec3 singleScatter,inout vec3 multiScatter){\n#endif\nvec2 fab=DFGApprox(normal,viewDir,roughness);\n#ifdef USE_IRIDESCENCE\nvec3 Fr=mix(specularColor,iridescenceF0,iridescence);\n#else\nvec3 Fr=specularColor;\n#endif\nvec3 FssEss=Fr*fab.x+specularF90*fab.y;float Ess=fab.x+fab.y;float Ems=1.0-Ess;vec3 Favg=Fr+(1.0-Fr)*0.047619;vec3 Fms=FssEss*Favg/(1.0-Ems*Favg);singleScatter+=FssEss;multiScatter+=Fms*Ems;}\n#if NUM_RECT_AREA_LIGHTS>0\nvoid RE_Direct_RectArea_Physical(const in RectAreaLight rectAreaLight,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){vec3 normal=geometry.normal;vec3 viewDir=geometry.viewDir;vec3 position=geometry.position;vec3 lightPos=rectAreaLight.position;vec3 halfWidth=rectAreaLight.halfWidth;vec3 halfHeight=rectAreaLight.halfHeight;vec3 lightColor=rectAreaLight.color;float roughness=material.roughness;vec3 rectCoords[4];rectCoords[0]=lightPos+halfWidth-halfHeight;rectCoords[1]=lightPos-halfWidth-halfHeight;rectCoords[2]=lightPos-halfWidth+halfHeight;rectCoords[3]=lightPos+halfWidth+halfHeight;vec2 uv=LTC_Uv(normal,viewDir,roughness);vec4 t1=texture2D(ltc_1,uv);vec4 t2=texture2D(ltc_2,uv);mat3 mInv=mat3(vec3(t1.x,0,t1.y),vec3(0,1,0),vec3(t1.z,0,t1.w));vec3 fresnel=(material.specularColor*t2.x+(vec3(1.0)-material.specularColor)*t2.y);reflectedLight.directSpecular+=lightColor*fresnel*LTC_Evaluate(normal,viewDir,position,mInv,rectCoords);reflectedLight.directDiffuse+=lightColor*material.diffuseColor*LTC_Evaluate(normal,viewDir,position,mat3(1.0),rectCoords);}\n#endif\nvoid RE_Direct_Physical(const in IncidentLight directLight,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){float dotNL=saturate(dot(geometry.normal,directLight.direction));vec3 irradiance=dotNL*directLight.color;\n#ifdef USE_CLEARCOAT\nfloat dotNLcc=saturate(dot(geometry.clearcoatNormal,directLight.direction));vec3 ccIrradiance=dotNLcc*directLight.color;clearcoatSpecular+=ccIrradiance*BRDF_GGX(directLight.direction,geometry.viewDir,geometry.clearcoatNormal,material.clearcoatF0,material.clearcoatF90,material.clearcoatRoughness);\n#endif\n#ifdef USE_SHEEN\nsheenSpecular+=irradiance*BRDF_Sheen(directLight.direction,geometry.viewDir,geometry.normal,material.sheenColor,material.sheenRoughness);\n#endif\n#ifdef USE_IRIDESCENCE\nreflectedLight.directSpecular+=irradiance*BRDF_GGX_Iridescence(directLight.direction,geometry.viewDir,geometry.normal,material.specularColor,material.specularF90,material.iridescence,material.iridescenceFresnel,material.roughness);\n#else\nreflectedLight.directSpecular+=irradiance*BRDF_GGX(directLight.direction,geometry.viewDir,geometry.normal,material.specularColor,material.specularF90,material.roughness);\n#endif\nreflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectDiffuse_Physical(const in vec3 irradiance,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectSpecular_Physical(const in vec3 radiance,const in vec3 irradiance,const in vec3 clearcoatRadiance,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){\n#ifdef USE_CLEARCOAT\nclearcoatSpecular+=clearcoatRadiance*EnvironmentBRDF(geometry.clearcoatNormal,geometry.viewDir,material.clearcoatF0,material.clearcoatF90,material.clearcoatRoughness);\n#endif\n#ifdef USE_SHEEN\nsheenSpecular+=irradiance*material.sheenColor*IBLSheenBRDF(geometry.normal,geometry.viewDir,material.sheenRoughness);\n#endif\nvec3 singleScattering=vec3(0.0);vec3 multiScattering=vec3(0.0);vec3 cosineWeightedIrradiance=irradiance*RECIPROCAL_PI;\n#ifdef USE_IRIDESCENCE\ncomputeMultiscatteringIridescence(geometry.normal,geometry.viewDir,material.specularColor,material.specularF90,material.iridescence,material.iridescenceFresnel,material.roughness,singleScattering,multiScattering);\n#else\ncomputeMultiscattering(geometry.normal,geometry.viewDir,material.specularColor,material.specularF90,material.roughness,singleScattering,multiScattering);\n#endif\nvec3 totalScattering=singleScattering+multiScattering;vec3 diffuse=material.diffuseColor*(1.0-max(max(totalScattering.r,totalScattering.g),totalScattering.b));reflectedLight.indirectSpecular+=radiance*singleScattering;reflectedLight.indirectSpecular+=multiScattering*cosineWeightedIrradiance;reflectedLight.indirectDiffuse+=diffuse*cosineWeightedIrradiance;}\n#define RE_Direct RE_Direct_Physical\n#define RE_Direct_RectArea RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion(const in float dotNV,const in float ambientOcclusion,const in float roughness){return saturate(pow(dotNV+ambientOcclusion,exp2(-16.0*roughness-1.0))-1.0+ambientOcclusion);}",
            lights_fragment_begin: "GeometricContext geometry;geometry.position=-vViewPosition;geometry.normal=normal;geometry.viewDir=(isOrthographic)?vec3(0,0,1):normalize(vViewPosition);\n#ifdef USE_CLEARCOAT\ngeometry.clearcoatNormal=clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\nfloat dotNVi=saturate(dot(normal,geometry.viewDir));if(material.iridescenceThickness==0.0){material.iridescence=0.0;}else{material.iridescence=saturate(material.iridescence);}if(material.iridescence>0.0){material.iridescenceFresnel=evalIridescence(1.0,material.iridescenceIOR,dotNVi,material.iridescenceThickness,material.specularColor);material.iridescenceF0=Schlick_to_F0(material.iridescenceFresnel,1.0,dotNVi);}\n#endif\nIncidentLight directLight;\n#if (NUM_POINT_LIGHTS>0)&&defined(RE_Direct)\nPointLight pointLight;\n#if defined(USE_SHADOWMAP)&&NUM_POINT_LIGHT_SHADOWS>0\nPointLightShadow pointLightShadow;\n#endif\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHTS;i++){pointLight=pointLights[i];getPointLightInfo(pointLight,geometry,directLight);\n#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_POINT_LIGHT_SHADOWS)\npointLightShadow=pointLightShadows[i];directLight.color*=all(bvec2(directLight.visible,receiveShadow))?getPointShadow(pointShadowMap[i],pointLightShadow.shadowMapSize,pointLightShadow.shadowBias,pointLightShadow.shadowRadius,vPointShadowCoord[i],pointLightShadow.shadowCameraNear,pointLightShadow.shadowCameraFar):1.0;\n#endif\nRE_Direct(directLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if (NUM_SPOT_LIGHTS>0)&&defined(RE_Direct)\nSpotLight spotLight;\n#if defined(USE_SHADOWMAP)&&NUM_SPOT_LIGHT_SHADOWS>0\nSpotLightShadow spotLightShadow;\n#endif\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHTS;i++){spotLight=spotLights[i];getSpotLightInfo(spotLight,geometry,directLight);\n#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_SPOT_LIGHT_SHADOWS)\nspotLightShadow=spotLightShadows[i];directLight.color*=all(bvec2(directLight.visible,receiveShadow))?getShadow(spotShadowMap[i],spotLightShadow.shadowMapSize,spotLightShadow.shadowBias,spotLightShadow.shadowRadius,vSpotShadowCoord[i]):1.0;\n#endif\nRE_Direct(directLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if (NUM_DIR_LIGHTS>0)&&defined(RE_Direct)\nDirectionalLight directionalLight;\n#if defined(USE_SHADOWMAP)&&NUM_DIR_LIGHT_SHADOWS>0\nDirectionalLightShadow directionalLightShadow;\n#endif\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHTS;i++){directionalLight=directionalLights[i];getDirectionalLightInfo(directionalLight,geometry,directLight);\n#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_DIR_LIGHT_SHADOWS)\ndirectionalLightShadow=directionalLightShadows[i];directLight.color*=all(bvec2(directLight.visible,receiveShadow))?getShadow(directionalShadowMap[i],directionalLightShadow.shadowMapSize,directionalLightShadow.shadowBias,directionalLightShadow.shadowRadius,vDirectionalShadowCoord[i]):1.0;\n#endif\nRE_Direct(directLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if (NUM_RECT_AREA_LIGHTS>0)&&defined(RE_Direct_RectArea)\nRectAreaLight rectAreaLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_RECT_AREA_LIGHTS;i++){rectAreaLight=rectAreaLights[i];RE_Direct_RectArea(rectAreaLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if defined(RE_IndirectDiffuse)\nvec3 iblIrradiance=vec3(0.0);vec3 irradiance=getAmbientLightIrradiance(ambientLightColor);irradiance+=getLightProbeIrradiance(lightProbe,geometry.normal);\n#if (NUM_HEMI_LIGHTS>0)\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_HEMI_LIGHTS;i++){irradiance+=getHemisphereLightIrradiance(hemisphereLights[i],geometry.normal);}\n#pragma unroll_loop_end\n#endif\n#endif\n#if defined(RE_IndirectSpecular)\nvec3 radiance=vec3(0.0);vec3 clearcoatRadiance=vec3(0.0);\n#endif",
            lights_fragment_maps: "#if defined(RE_IndirectDiffuse)\n#ifdef USE_LIGHTMAP\nvec4 lightMapTexel=texture2D(lightMap,vUv2);vec3 lightMapIrradiance=lightMapTexel.rgb*lightMapIntensity;irradiance+=lightMapIrradiance;\n#endif\n#if defined(USE_ENVMAP)&&defined(STANDARD)&&defined(ENVMAP_TYPE_CUBE_UV)\niblIrradiance+=getIBLIrradiance(geometry.normal);\n#endif\n#endif\n#if defined(USE_ENVMAP)&&defined(RE_IndirectSpecular)\nradiance+=getIBLRadiance(geometry.viewDir,geometry.normal,material.roughness);\n#ifdef USE_CLEARCOAT\nclearcoatRadiance+=getIBLRadiance(geometry.viewDir,geometry.clearcoatNormal,material.clearcoatRoughness);\n#endif\n#endif",
            lights_fragment_end: "#if defined(RE_IndirectDiffuse)\nRE_IndirectDiffuse(irradiance,geometry,material,reflectedLight);\n#endif\n#if defined(RE_IndirectSpecular)\nRE_IndirectSpecular(radiance,iblIrradiance,clearcoatRadiance,geometry,material,reflectedLight);\n#endif",
            logdepthbuf_fragment: "#if defined(USE_LOGDEPTHBUF)&&defined(USE_LOGDEPTHBUF_EXT)\ngl_FragDepthEXT=vIsPerspective==0.0?gl_FragCoord.z:log2(vFragDepth)*logDepthBufFC*0.5;\n#endif",
            logdepthbuf_pars_fragment: "#if defined(USE_LOGDEPTHBUF)&&defined(USE_LOGDEPTHBUF_EXT)\nuniform float logDepthBufFC;varying float vFragDepth;varying float vIsPerspective;\n#endif",
            logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n#ifdef USE_LOGDEPTHBUF_EXT\nvarying float vFragDepth;varying float vIsPerspective;\n#else\nuniform float logDepthBufFC;\n#endif\n#endif",
            logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n#ifdef USE_LOGDEPTHBUF_EXT\nvFragDepth=1.0+gl_Position.w;vIsPerspective=float(isPerspectiveMatrix(projectionMatrix));\n#else\nif(isPerspectiveMatrix(projectionMatrix)){gl_Position.z=log2(max(EPSILON,gl_Position.w+1.0))*logDepthBufFC-1.0;gl_Position.z*=gl_Position.w;}\n#endif\n#endif",
            map_fragment: "#ifdef USE_MAP\nvec4 sampledDiffuseColor=texture2D(map,vUv);\n#ifdef DECODE_VIDEO_TEXTURE\nsampledDiffuseColor=vec4(mix(pow(sampledDiffuseColor.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),sampledDiffuseColor.rgb*0.0773993808,vec3(lessThanEqual(sampledDiffuseColor.rgb,vec3(0.04045)))),sampledDiffuseColor.w);\n#endif\ndiffuseColor*=sampledDiffuseColor;\n#endif",
            map_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
            map_particle_fragment: "#if defined(USE_MAP)||defined(USE_ALPHAMAP)\nvec2 uv=(uvTransform*vec3(gl_PointCoord.x,1.0-gl_PointCoord.y,1)).xy;\n#endif\n#ifdef USE_MAP\ndiffuseColor*=texture2D(map,uv);\n#endif\n#ifdef USE_ALPHAMAP\ndiffuseColor.a*=texture2D(alphaMap,uv).g;\n#endif",
            map_particle_pars_fragment: "#if defined(USE_MAP)||defined(USE_ALPHAMAP)\nuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\nuniform sampler2D alphaMap;\n#endif",
            metalnessmap_fragment: "float metalnessFactor=metalness;\n#ifdef USE_METALNESSMAP\nvec4 texelMetalness=texture2D(metalnessMap,vUv);metalnessFactor*=texelMetalness.b;\n#endif",
            metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\nuniform sampler2D metalnessMap;\n#endif",
            morphcolor_vertex: "#if defined(USE_MORPHCOLORS)&&defined(MORPHTARGETS_TEXTURE)\nvColor*=morphTargetBaseInfluence;for(int i=0;i<MORPHTARGETS_COUNT;i++){\n#if defined(USE_COLOR_ALPHA)\nif(morphTargetInfluences[i]!=0.0)vColor+=getMorph(gl_VertexID,i,2)*morphTargetInfluences[i];\n#elif defined(USE_COLOR)\nif(morphTargetInfluences[i]!=0.0)vColor+=getMorph(gl_VertexID,i,2).rgb*morphTargetInfluences[i];\n#endif\n}\n#endif",
            morphnormal_vertex: "#ifdef USE_MORPHNORMALS\nobjectNormal*=morphTargetBaseInfluence;\n#ifdef MORPHTARGETS_TEXTURE\nfor(int i=0;i<MORPHTARGETS_COUNT;i++){if(morphTargetInfluences[i]!=0.0)objectNormal+=getMorph(gl_VertexID,i,1).xyz*morphTargetInfluences[i];}\n#else\nobjectNormal+=morphNormal0*morphTargetInfluences[0];objectNormal+=morphNormal1*morphTargetInfluences[1];objectNormal+=morphNormal2*morphTargetInfluences[2];objectNormal+=morphNormal3*morphTargetInfluences[3];\n#endif\n#endif",
            morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\nuniform float morphTargetBaseInfluence;\n#ifdef MORPHTARGETS_TEXTURE\nuniform float morphTargetInfluences[MORPHTARGETS_COUNT];uniform sampler2DArray morphTargetsTexture;uniform ivec2 morphTargetsTextureSize;vec4 getMorph(const in int vertexIndex,const in int morphTargetIndex,const in int offset){int texelIndex=vertexIndex*MORPHTARGETS_TEXTURE_STRIDE+offset;int y=texelIndex/morphTargetsTextureSize.x;int x=texelIndex-y*morphTargetsTextureSize.x;ivec3 morphUV=ivec3(x,y,morphTargetIndex);return texelFetch(morphTargetsTexture,morphUV,0);}\n#else\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[8];\n#else\nuniform float morphTargetInfluences[4];\n#endif\n#endif\n#endif",
            morphtarget_vertex: "#ifdef USE_MORPHTARGETS\ntransformed*=morphTargetBaseInfluence;\n#ifdef MORPHTARGETS_TEXTURE\nfor(int i=0;i<MORPHTARGETS_COUNT;i++){if(morphTargetInfluences[i]!=0.0)transformed+=getMorph(gl_VertexID,i,0).xyz*morphTargetInfluences[i];}\n#else\ntransformed+=morphTarget0*morphTargetInfluences[0];transformed+=morphTarget1*morphTargetInfluences[1];transformed+=morphTarget2*morphTargetInfluences[2];transformed+=morphTarget3*morphTargetInfluences[3];\n#ifndef USE_MORPHNORMALS\ntransformed+=morphTarget4*morphTargetInfluences[4];transformed+=morphTarget5*morphTargetInfluences[5];transformed+=morphTarget6*morphTargetInfluences[6];transformed+=morphTarget7*morphTargetInfluences[7];\n#endif\n#endif\n#endif",
            normal_fragment_begin: "float faceDirection=gl_FrontFacing?1.0:-1.0;\n#ifdef FLAT_SHADED\nvec3 fdx=vec3(dFdx(vViewPosition.x),dFdx(vViewPosition.y),dFdx(vViewPosition.z));vec3 fdy=vec3(dFdy(vViewPosition.x),dFdy(vViewPosition.y),dFdy(vViewPosition.z));vec3 normal=normalize(cross(fdx,fdy));\n#else\nvec3 normal=normalize(vNormal);\n#ifdef DOUBLE_SIDED\nnormal=normal*faceDirection;\n#endif\n#ifdef USE_TANGENT\nvec3 tangent=normalize(vTangent);vec3 bitangent=normalize(vBitangent);\n#ifdef DOUBLE_SIDED\ntangent=tangent*faceDirection;bitangent=bitangent*faceDirection;\n#endif\n#if defined(TANGENTSPACE_NORMALMAP)||defined(USE_CLEARCOAT_NORMALMAP)\nmat3 vTBN=mat3(tangent,bitangent,normal);\n#endif\n#endif\n#endif\nvec3 geometryNormal=normal;",
            normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\nnormal=texture2D(normalMap,vUv).xyz*2.0-1.0;\n#ifdef FLIP_SIDED\nnormal=-normal;\n#endif\n#ifdef DOUBLE_SIDED\nnormal=normal*faceDirection;\n#endif\nnormal=normalize(normalMatrix*normal);\n#elif defined(TANGENTSPACE_NORMALMAP)\nvec3 mapN=texture2D(normalMap,vUv).xyz*2.0-1.0;mapN.xy*=normalScale;\n#ifdef USE_TANGENT\nnormal=normalize(vTBN*mapN);\n#else\nnormal=perturbNormal2Arb(-vViewPosition,normal,mapN,faceDirection);\n#endif\n#elif defined(USE_BUMPMAP)\nnormal=perturbNormalArb(-vViewPosition,normal,dHdxy_fwd(),faceDirection);\n#endif",
            normal_pars_fragment: "#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif",
            normal_pars_vertex: "#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif",
            normal_vertex: "#ifndef FLAT_SHADED\nvNormal=normalize(transformedNormal);\n#ifdef USE_TANGENT\nvTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);\n#endif\n#endif",
            normalmap_pars_fragment: "#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\nuniform mat3 normalMatrix;\n#endif\n#if !defined(USE_TANGENT)&&(defined(TANGENTSPACE_NORMALMAP)||defined(USE_CLEARCOAT_NORMALMAP))\nvec3 perturbNormal2Arb(vec3 eye_pos,vec3 surf_norm,vec3 mapN,float faceDirection){vec3 q0=vec3(dFdx(eye_pos.x),dFdx(eye_pos.y),dFdx(eye_pos.z));vec3 q1=vec3(dFdy(eye_pos.x),dFdy(eye_pos.y),dFdy(eye_pos.z));vec2 st0=dFdx(vUv.st);vec2 st1=dFdy(vUv.st);vec3 N=surf_norm;vec3 q1perp=cross(q1,N);vec3 q0perp=cross(N,q0);vec3 T=q1perp*st0.x+q0perp*st1.x;vec3 B=q1perp*st0.y+q0perp*st1.y;float det=max(dot(T,T),dot(B,B));float scale=(det==0.0)?0.0:faceDirection*inversesqrt(det);return normalize(T*(mapN.x*scale)+B*(mapN.y*scale)+N*mapN.z);}\n#endif",
            clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\nvec3 clearcoatNormal=geometryNormal;\n#endif",
            clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\nvec3 clearcoatMapN=texture2D(clearcoatNormalMap,vUv).xyz*2.0-1.0;clearcoatMapN.xy*=clearcoatNormalScale;\n#ifdef USE_TANGENT\nclearcoatNormal=normalize(vTBN*clearcoatMapN);\n#else\nclearcoatNormal=perturbNormal2Arb(-vViewPosition,clearcoatNormal,clearcoatMapN,faceDirection);\n#endif\n#endif",
            clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\nuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\nuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\nuniform sampler2D clearcoatNormalMap;uniform vec2 clearcoatNormalScale;\n#endif",
            iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\nuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\nuniform sampler2D iridescenceThicknessMap;\n#endif",
            output_fragment: "#ifdef OPAQUE\ndiffuseColor.a=1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a*=transmissionAlpha+0.1;\n#endif\ngl_FragColor=vec4(outgoingLight,diffuseColor.a);",
            packing: "vec3 packNormalToRGB(const in vec3 normal){return normalize(normal)*0.5+0.5;}vec3 unpackRGBToNormal(const in vec3 rgb){return 2.0*rgb.xyz-1.0;}const float PackUpscale=256./255.;const float UnpackDownscale=255./256.;const vec3 PackFactors=vec3(256.*256.*256.,256.*256.,256.);const vec4 UnpackFactors=UnpackDownscale/vec4(PackFactors,1.);const float ShiftRight8=1./256.;vec4 packDepthToRGBA(const in float v){vec4 r=vec4(fract(v*PackFactors),v);r.yzw-=r.xyz*ShiftRight8;return r*PackUpscale;}float unpackRGBAToDepth(const in vec4 v){return dot(v,UnpackFactors);}vec4 pack2HalfToRGBA(vec2 v){vec4 r=vec4(v.x,fract(v.x*255.0),v.y,fract(v.y*255.0));return vec4(r.x-r.y/255.0,r.y,r.z-r.w/255.0,r.w);}vec2 unpackRGBATo2Half(vec4 v){return vec2(v.x+(v.y/255.0),v.z+(v.w/255.0));}float viewZToOrthographicDepth(const in float viewZ,const in float near,const in float far){return(viewZ+near)/(near-far);}float orthographicDepthToViewZ(const in float linearClipZ,const in float near,const in float far){return linearClipZ*(near-far)-near;}float viewZToPerspectiveDepth(const in float viewZ,const in float near,const in float far){return((near+viewZ)*far)/((far-near)*viewZ);}float perspectiveDepthToViewZ(const in float invClipZ,const in float near,const in float far){return(near*far)/((far-near)*invClipZ-far);}",
            premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\ngl_FragColor.rgb*=gl_FragColor.a;\n#endif",
            project_vertex: "vec4 mvPosition=vec4(transformed,1.0);\n#ifdef USE_INSTANCING\nmvPosition=instanceMatrix*mvPosition;\n#endif\nmvPosition=modelViewMatrix*mvPosition;gl_Position=projectionMatrix*mvPosition;",
            dithering_fragment: "#ifdef DITHERING\ngl_FragColor.rgb=dithering(gl_FragColor.rgb);\n#endif",
            dithering_pars_fragment: "#ifdef DITHERING\nvec3 dithering(vec3 color){float grid_position=rand(gl_FragCoord.xy);vec3 dither_shift_RGB=vec3(0.25/255.0,-0.25/255.0,0.25/255.0);dither_shift_RGB=mix(2.0*dither_shift_RGB,-2.0*dither_shift_RGB,grid_position);return color+dither_shift_RGB;}\n#endif",
            roughnessmap_fragment: "float roughnessFactor=roughness;\n#ifdef USE_ROUGHNESSMAP\nvec4 texelRoughness=texture2D(roughnessMap,vUv);roughnessFactor*=texelRoughness.g;\n#endif",
            roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\nuniform sampler2D roughnessMap;\n#endif",
            shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0\nuniform sampler2D directionalShadowMap[NUM_DIR_LIGHT_SHADOWS];varying vec4 vDirectionalShadowCoord[NUM_DIR_LIGHT_SHADOWS];struct DirectionalLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform DirectionalLightShadow directionalLightShadows[NUM_DIR_LIGHT_SHADOWS];\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\nuniform sampler2D spotShadowMap[NUM_SPOT_LIGHT_SHADOWS];varying vec4 vSpotShadowCoord[NUM_SPOT_LIGHT_SHADOWS];struct SpotLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform SpotLightShadow spotLightShadows[NUM_SPOT_LIGHT_SHADOWS];\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\nuniform sampler2D pointShadowMap[NUM_POINT_LIGHT_SHADOWS];varying vec4 vPointShadowCoord[NUM_POINT_LIGHT_SHADOWS];struct PointLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;float shadowCameraNear;float shadowCameraFar;};uniform PointLightShadow pointLightShadows[NUM_POINT_LIGHT_SHADOWS];\n#endif\nfloat texture2DCompare(sampler2D depths,vec2 uv,float compare){return step(compare,unpackRGBAToDepth(texture2D(depths,uv)));}vec2 texture2DDistribution(sampler2D shadow,vec2 uv){return unpackRGBATo2Half(texture2D(shadow,uv));}float VSMShadow(sampler2D shadow,vec2 uv,float compare){float occlusion=1.0;vec2 distribution=texture2DDistribution(shadow,uv);float hard_shadow=step(compare,distribution.x);if(hard_shadow!=1.0){float distance=compare-distribution.x;float variance=max(0.00000,distribution.y*distribution.y);float softness_probability=variance/(variance+distance*distance);softness_probability=clamp((softness_probability-0.3)/(0.95-0.3),0.0,1.0);occlusion=clamp(max(hard_shadow,softness_probability),0.0,1.0);}return occlusion;}float getShadow(sampler2D shadowMap,vec2 shadowMapSize,float shadowBias,float shadowRadius,vec4 shadowCoord){float shadow=1.0;shadowCoord.xyz/=shadowCoord.w;shadowCoord.z+=shadowBias;bvec4 inFrustumVec=bvec4(shadowCoord.x>=0.0,shadowCoord.x<=1.0,shadowCoord.y>=0.0,shadowCoord.y<=1.0);bool inFrustum=all(inFrustumVec);bvec2 frustumTestVec=bvec2(inFrustum,shadowCoord.z<=1.0);bool frustumTest=all(frustumTestVec);if(frustumTest){\n#if defined(SHADOWMAP_TYPE_PCF)\nvec2 texelSize=vec2(1.0)/shadowMapSize;float dx0=-texelSize.x*shadowRadius;float dy0=-texelSize.y*shadowRadius;float dx1=+texelSize.x*shadowRadius;float dy1=+texelSize.y*shadowRadius;float dx2=dx0/2.0;float dy2=dy0/2.0;float dx3=dx1/2.0;float dy3=dy1/2.0;shadow=(texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy,shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,dy1),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy1),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,dy1),shadowCoord.z))*(1.0/17.0);\n#elif defined(SHADOWMAP_TYPE_PCF_SOFT)\nvec2 texelSize=vec2(1.0)/shadowMapSize;float dx=texelSize.x;float dy=texelSize.y;vec2 uv=shadowCoord.xy;vec2 f=fract(uv*shadowMapSize+0.5);uv-=f*texelSize;shadow=(texture2DCompare(shadowMap,uv,shadowCoord.z)+texture2DCompare(shadowMap,uv+vec2(dx,0.0),shadowCoord.z)+texture2DCompare(shadowMap,uv+vec2(0.0,dy),shadowCoord.z)+texture2DCompare(shadowMap,uv+texelSize,shadowCoord.z)+mix(texture2DCompare(shadowMap,uv+vec2(-dx,0.0),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,0.0),shadowCoord.z),f.x)+mix(texture2DCompare(shadowMap,uv+vec2(-dx,dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,dy),shadowCoord.z),f.x)+mix(texture2DCompare(shadowMap,uv+vec2(0.0,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(0.0,2.0*dy),shadowCoord.z),f.y)+mix(texture2DCompare(shadowMap,uv+vec2(dx,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(dx,2.0*dy),shadowCoord.z),f.y)+mix(mix(texture2DCompare(shadowMap,uv+vec2(-dx,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,-dy),shadowCoord.z),f.x),mix(texture2DCompare(shadowMap,uv+vec2(-dx,2.0*dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,2.0*dy),shadowCoord.z),f.x),f.y))*(1.0/9.0);\n#elif defined(SHADOWMAP_TYPE_VSM)\nshadow=VSMShadow(shadowMap,shadowCoord.xy,shadowCoord.z);\n#else\nshadow=texture2DCompare(shadowMap,shadowCoord.xy,shadowCoord.z);\n#endif\n}return shadow;}vec2 cubeToUV(vec3 v,float texelSizeY){vec3 absV=abs(v);float scaleToCube=1.0/max(absV.x,max(absV.y,absV.z));absV*=scaleToCube;v*=scaleToCube*(1.0-2.0*texelSizeY);vec2 planar=v.xy;float almostATexel=1.5*texelSizeY;float almostOne=1.0-almostATexel;if(absV.z>=almostOne){if(v.z>0.0)planar.x=4.0-v.x;}else if(absV.x>=almostOne){float signX=sign(v.x);planar.x=v.z*signX+2.0*signX;}else if(absV.y>=almostOne){float signY=sign(v.y);planar.x=v.x+2.0*signY+2.0;planar.y=v.z*signY-2.0;}return vec2(0.125,0.25)*planar+vec2(0.375,0.75);}float getPointShadow(sampler2D shadowMap,vec2 shadowMapSize,float shadowBias,float shadowRadius,vec4 shadowCoord,float shadowCameraNear,float shadowCameraFar){vec2 texelSize=vec2(1.0)/(shadowMapSize*vec2(4.0,2.0));vec3 lightToPosition=shadowCoord.xyz;float dp=(length(lightToPosition)-shadowCameraNear)/(shadowCameraFar-shadowCameraNear);dp+=shadowBias;vec3 bd3D=normalize(lightToPosition);\n#if defined(SHADOWMAP_TYPE_PCF)||defined(SHADOWMAP_TYPE_PCF_SOFT)||defined(SHADOWMAP_TYPE_VSM)\nvec2 offset=vec2(-1,1)*shadowRadius*texelSize.y;return(texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xyy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yyy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xyx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yyx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xxy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yxy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xxx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yxx,texelSize.y),dp))*(1.0/9.0);\n#else\nreturn texture2DCompare(shadowMap,cubeToUV(bd3D,texelSize.y),dp);\n#endif\n}\n#endif",
            shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0\nuniform mat4 directionalShadowMatrix[NUM_DIR_LIGHT_SHADOWS];varying vec4 vDirectionalShadowCoord[NUM_DIR_LIGHT_SHADOWS];struct DirectionalLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform DirectionalLightShadow directionalLightShadows[NUM_DIR_LIGHT_SHADOWS];\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\nuniform mat4 spotShadowMatrix[NUM_SPOT_LIGHT_SHADOWS];varying vec4 vSpotShadowCoord[NUM_SPOT_LIGHT_SHADOWS];struct SpotLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform SpotLightShadow spotLightShadows[NUM_SPOT_LIGHT_SHADOWS];\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\nuniform mat4 pointShadowMatrix[NUM_POINT_LIGHT_SHADOWS];varying vec4 vPointShadowCoord[NUM_POINT_LIGHT_SHADOWS];struct PointLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;float shadowCameraNear;float shadowCameraFar;};uniform PointLightShadow pointLightShadows[NUM_POINT_LIGHT_SHADOWS];\n#endif\n#endif",
            shadowmap_vertex: "#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0||NUM_SPOT_LIGHT_SHADOWS>0||NUM_POINT_LIGHT_SHADOWS>0\nvec3 shadowWorldNormal=inverseTransformDirection(transformedNormal,viewMatrix);vec4 shadowWorldPosition;\n#endif\n#if NUM_DIR_LIGHT_SHADOWS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHT_SHADOWS;i++){shadowWorldPosition=worldPosition+vec4(shadowWorldNormal*directionalLightShadows[i].shadowNormalBias,0);vDirectionalShadowCoord[i]=directionalShadowMatrix[i]*shadowWorldPosition;}\n#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHT_SHADOWS;i++){shadowWorldPosition=worldPosition+vec4(shadowWorldNormal*spotLightShadows[i].shadowNormalBias,0);vSpotShadowCoord[i]=spotShadowMatrix[i]*shadowWorldPosition;}\n#pragma unroll_loop_end\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHT_SHADOWS;i++){shadowWorldPosition=worldPosition+vec4(shadowWorldNormal*pointLightShadows[i].shadowNormalBias,0);vPointShadowCoord[i]=pointShadowMatrix[i]*shadowWorldPosition;}\n#pragma unroll_loop_end\n#endif\n#endif",
            shadowmask_pars_fragment: "float getShadowMask(){float shadow=1.0;\n#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0\nDirectionalLightShadow directionalLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHT_SHADOWS;i++){directionalLight=directionalLightShadows[i];shadow*=receiveShadow?getShadow(directionalShadowMap[i],directionalLight.shadowMapSize,directionalLight.shadowBias,directionalLight.shadowRadius,vDirectionalShadowCoord[i]):1.0;}\n#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\nSpotLightShadow spotLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHT_SHADOWS;i++){spotLight=spotLightShadows[i];shadow*=receiveShadow?getShadow(spotShadowMap[i],spotLight.shadowMapSize,spotLight.shadowBias,spotLight.shadowRadius,vSpotShadowCoord[i]):1.0;}\n#pragma unroll_loop_end\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\nPointLightShadow pointLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHT_SHADOWS;i++){pointLight=pointLightShadows[i];shadow*=receiveShadow?getPointShadow(pointShadowMap[i],pointLight.shadowMapSize,pointLight.shadowBias,pointLight.shadowRadius,vPointShadowCoord[i],pointLight.shadowCameraNear,pointLight.shadowCameraFar):1.0;}\n#pragma unroll_loop_end\n#endif\n#endif\nreturn shadow;}",
            skinbase_vertex: "#ifdef USE_SKINNING\nmat4 boneMatX=getBoneMatrix(skinIndex.x);mat4 boneMatY=getBoneMatrix(skinIndex.y);mat4 boneMatZ=getBoneMatrix(skinIndex.z);mat4 boneMatW=getBoneMatrix(skinIndex.w);\n#endif",
            skinning_pars_vertex: "#ifdef USE_SKINNING\nuniform mat4 bindMatrix;uniform mat4 bindMatrixInverse;uniform highp sampler2D boneTexture;uniform int boneTextureSize;mat4 getBoneMatrix(const in float i){float j=i*4.0;float x=mod(j,float(boneTextureSize));float y=floor(j/float(boneTextureSize));float dx=1.0/float(boneTextureSize);float dy=1.0/float(boneTextureSize);y=dy*(y+0.5);vec4 v1=texture2D(boneTexture,vec2(dx*(x+0.5),y));vec4 v2=texture2D(boneTexture,vec2(dx*(x+1.5),y));vec4 v3=texture2D(boneTexture,vec2(dx*(x+2.5),y));vec4 v4=texture2D(boneTexture,vec2(dx*(x+3.5),y));mat4 bone=mat4(v1,v2,v3,v4);return bone;}\n#endif",
            skinning_vertex: "#ifdef USE_SKINNING\nvec4 skinVertex=bindMatrix*vec4(transformed,1.0);vec4 skinned=vec4(0.0);skinned+=boneMatX*skinVertex*skinWeight.x;skinned+=boneMatY*skinVertex*skinWeight.y;skinned+=boneMatZ*skinVertex*skinWeight.z;skinned+=boneMatW*skinVertex*skinWeight.w;transformed=(bindMatrixInverse*skinned).xyz;\n#endif",
            skinnormal_vertex: "#ifdef USE_SKINNING\nmat4 skinMatrix=mat4(0.0);skinMatrix+=skinWeight.x*boneMatX;skinMatrix+=skinWeight.y*boneMatY;skinMatrix+=skinWeight.z*boneMatZ;skinMatrix+=skinWeight.w*boneMatW;skinMatrix=bindMatrixInverse*skinMatrix*bindMatrix;objectNormal=vec4(skinMatrix*vec4(objectNormal,0.0)).xyz;\n#ifdef USE_TANGENT\nobjectTangent=vec4(skinMatrix*vec4(objectTangent,0.0)).xyz;\n#endif\n#endif",
            specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular=texture2D(specularMap,vUv);specularStrength=texelSpecular.r;\n#else\nspecularStrength=1.0;\n#endif",
            specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif",
            tonemapping_fragment: "#if defined(TONE_MAPPING)\ngl_FragColor.rgb=toneMapping(gl_FragColor.rgb);\n#endif",
            tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a)clamp(a,0.0,1.0)\n#endif\nuniform float toneMappingExposure;vec3 LinearToneMapping(vec3 color){return toneMappingExposure*color;}vec3 ReinhardToneMapping(vec3 color){color*=toneMappingExposure;return saturate(color/(vec3(1.0)+color));}vec3 OptimizedCineonToneMapping(vec3 color){color*=toneMappingExposure;color=max(vec3(0.0),color-0.004);return pow((color*(6.2*color+0.5))/(color*(6.2*color+1.7)+0.06),vec3(2.2));}vec3 RRTAndODTFit(vec3 v){vec3 a=v*(v+0.0245786)-0.000090537;vec3 b=v*(0.983729*v+0.4329510)+0.238081;return a/b;}vec3 ACESFilmicToneMapping(vec3 color){const mat3 ACESInputMat=mat3(vec3(0.59719,0.07600,0.02840),vec3(0.35458,0.90834,0.13383),vec3(0.04823,0.01566,0.83777));const mat3 ACESOutputMat=mat3(vec3(1.60475,-0.10208,-0.00327),vec3(-0.53108,1.10813,-0.07276),vec3(-0.07367,-0.00605,1.07602));color*=toneMappingExposure/0.6;color=ACESInputMat*color;color=RRTAndODTFit(color);color=ACESOutputMat*color;return saturate(color);}vec3 CustomToneMapping(vec3 color){return color;}",
            transmission_fragment: "#ifdef USE_TRANSMISSION\nfloat transmissionAlpha=1.0;float transmissionFactor=transmission;float thicknessFactor=thickness;\n#ifdef USE_TRANSMISSIONMAP\ntransmissionFactor*=texture2D(transmissionMap,vUv).r;\n#endif\n#ifdef USE_THICKNESSMAP\nthicknessFactor*=texture2D(thicknessMap,vUv).g;\n#endif\nvec3 pos=vWorldPosition;vec3 v=normalize(cameraPosition-pos);vec3 n=inverseTransformDirection(normal,viewMatrix);vec4 transmission=getIBLVolumeRefraction(n,v,roughnessFactor,material.diffuseColor,material.specularColor,material.specularF90,pos,modelMatrix,viewMatrix,projectionMatrix,ior,thicknessFactor,attenuationColor,attenuationDistance);totalDiffuse=mix(totalDiffuse,transmission.rgb,transmissionFactor);transmissionAlpha=mix(transmissionAlpha,transmission.a,transmissionFactor);\n#endif",
            transmission_pars_fragment: "#ifdef USE_TRANSMISSION\nuniform float transmission;uniform float thickness;uniform float attenuationDistance;uniform vec3 attenuationColor;\n#ifdef USE_TRANSMISSIONMAP\nuniform sampler2D transmissionMap;\n#endif\n#ifdef USE_THICKNESSMAP\nuniform sampler2D thicknessMap;\n#endif\nuniform vec2 transmissionSamplerSize;uniform sampler2D transmissionSamplerMap;uniform mat4 modelMatrix;uniform mat4 projectionMatrix;varying vec3 vWorldPosition;vec3 getVolumeTransmissionRay(const in vec3 n,const in vec3 v,const in float thickness,const in float ior,const in mat4 modelMatrix){vec3 refractionVector=refract(-v,normalize(n),1.0/ior);vec3 modelScale;modelScale.x=length(vec3(modelMatrix[0].xyz));modelScale.y=length(vec3(modelMatrix[1].xyz));modelScale.z=length(vec3(modelMatrix[2].xyz));return normalize(refractionVector)*thickness*modelScale;}float applyIorToRoughness(const in float roughness,const in float ior){return roughness*clamp(ior*2.0-2.0,0.0,1.0);}vec4 getTransmissionSample(const in vec2 fragCoord,const in float roughness,const in float ior){float framebufferLod=log2(transmissionSamplerSize.x)*applyIorToRoughness(roughness,ior);\n#ifdef texture2DLodEXT\nreturn texture2DLodEXT(transmissionSamplerMap,fragCoord.xy,framebufferLod);\n#else\nreturn texture2D(transmissionSamplerMap,fragCoord.xy,framebufferLod);\n#endif\n}vec3 applyVolumeAttenuation(const in vec3 radiance,const in float transmissionDistance,const in vec3 attenuationColor,const in float attenuationDistance){if(attenuationDistance==0.0){return radiance;}else{vec3 attenuationCoefficient=-log(attenuationColor)/attenuationDistance;vec3 transmittance=exp(-attenuationCoefficient*transmissionDistance);return transmittance*radiance;}}vec4 getIBLVolumeRefraction(const in vec3 n,const in vec3 v,const in float roughness,const in vec3 diffuseColor,const in vec3 specularColor,const in float specularF90,const in vec3 position,const in mat4 modelMatrix,const in mat4 viewMatrix,const in mat4 projMatrix,const in float ior,const in float thickness,const in vec3 attenuationColor,const in float attenuationDistance){vec3 transmissionRay=getVolumeTransmissionRay(n,v,thickness,ior,modelMatrix);vec3 refractedRayExit=position+transmissionRay;vec4 ndcPos=projMatrix*viewMatrix*vec4(refractedRayExit,1.0);vec2 refractionCoords=ndcPos.xy/ndcPos.w;refractionCoords+=1.0;refractionCoords/=2.0;vec4 transmittedLight=getTransmissionSample(refractionCoords,roughness,ior);vec3 attenuatedColor=applyVolumeAttenuation(transmittedLight.rgb,length(transmissionRay),attenuationColor,attenuationDistance);vec3 F=EnvironmentBRDF(n,v,specularColor,specularF90,roughness);return vec4((1.0-F)*attenuatedColor*diffuseColor,transmittedLight.a);}\n#endif",
            uv_pars_fragment: "#if (defined(USE_UV)&&!defined(UVS_VERTEX_ONLY))\nvarying vec2 vUv;\n#endif",
            uv_pars_vertex: "#ifdef USE_UV\n#ifdef UVS_VERTEX_ONLY\nvec2 vUv;\n#else\nvarying vec2 vUv;\n#endif\nuniform mat3 uvTransform;\n#endif",
            uv_vertex: "#ifdef USE_UV\nvUv=(uvTransform*vec3(uv,1)).xy;\n#endif",
            uv2_pars_fragment: "#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)\nvarying vec2 vUv2;\n#endif",
            uv2_pars_vertex: "#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)\nattribute vec2 uv2;varying vec2 vUv2;uniform mat3 uv2Transform;\n#endif",
            uv2_vertex: "#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)\nvUv2=(uv2Transform*vec3(uv2,1)).xy;\n#endif",
            worldpos_vertex: "#if defined(USE_ENVMAP)||defined(DISTANCE)||defined(USE_SHADOWMAP)||defined(USE_TRANSMISSION)\nvec4 worldPosition=vec4(transformed,1.0);\n#ifdef USE_INSTANCING\nworldPosition=instanceMatrix*worldPosition;\n#endif\nworldPosition=modelMatrix*worldPosition;\n#endif",
            background_vert: "varying vec2 vUv;uniform mat3 uvTransform;void main(){vUv=(uvTransform*vec3(uv,1)).xy;gl_Position=vec4(position.xy,1.0,1.0);}",
            background_frag: "uniform sampler2D t2D;varying vec2 vUv;void main(){gl_FragColor=texture2D(t2D,vUv);\n#ifdef DECODE_VIDEO_TEXTURE\ngl_FragColor=vec4(mix(pow(gl_FragColor.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),gl_FragColor.rgb*0.0773993808,vec3(lessThanEqual(gl_FragColor.rgb,vec3(0.04045)))),gl_FragColor.w);\n#endif\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}",
            cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\ngl_Position.z=gl_Position.w;}",
            cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;varying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main(){vec3 vReflect=vWorldDirection;\n#include <envmap_fragment>\ngl_FragColor=envColor;gl_FragColor.a*=opacity;\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}",
            depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;void main(){\n#include <uv_vertex>\n#include <skinbase_vertex>\n#ifdef USE_DISPLACEMENTMAP\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinnormal_vertex>\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvHighPrecisionZW=gl_Position.zw;}",
            depth_frag: "#if DEPTH_PACKING==3200\nuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;void main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(1.0);\n#if DEPTH_PACKING==3200\ndiffuseColor.a=opacity;\n#endif\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <logdepthbuf_fragment>\nfloat fragCoordZ=0.5*vHighPrecisionZW[0]/vHighPrecisionZW[1]+0.5;\n#if DEPTH_PACKING==3200\ngl_FragColor=vec4(vec3(1.0-fragCoordZ),opacity);\n#elif DEPTH_PACKING==3201\ngl_FragColor=packDepthToRGBA(fragCoordZ);\n#endif\n}",
            distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <skinbase_vertex>\n#ifdef USE_DISPLACEMENTMAP\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinnormal_vertex>\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <worldpos_vertex>\n#include <clipping_planes_vertex>\nvWorldPosition=worldPosition.xyz;}",
            distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;uniform float nearDistance;uniform float farDistance;varying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(1.0);\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\nfloat dist=length(vWorldPosition-referencePosition);dist=(dist-nearDistance)/(farDistance-nearDistance);dist=saturate(dist);gl_FragColor=packDepthToRGBA(dist);}",
            equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\n}",
            equirect_frag: "uniform sampler2D tEquirect;varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vec3 direction=normalize(vWorldDirection);vec2 sampleUV=equirectUv(direction);gl_FragColor=texture2D(tEquirect,sampleUV);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}",
            linedashed_vert: "uniform float scale;attribute float lineDistance;varying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){vLineDistance=scale*lineDistance;\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <fog_vertex>\n}",
            linedashed_frag: "uniform vec3 diffuse;uniform float opacity;uniform float dashSize;uniform float totalSize;varying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nif(mod(vLineDistance,totalSize)>dashSize){discard;}vec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <color_fragment>\noutgoingLight=diffuseColor.rgb;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n}",
            meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#if defined(USE_ENVMAP)||defined(USE_SKINNING)\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <fog_vertex>\n}",
            meshbasic_frag: "uniform vec3 diffuse;uniform float opacity;\n#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\nReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));\n#ifdef USE_LIGHTMAP\nvec4 lightMapTexel=texture2D(lightMap,vUv2);reflectedLight.indirectDiffuse+=lightMapTexel.rgb*lightMapIntensity*RECIPROCAL_PI;\n#else\nreflectedLight.indirectDiffuse+=vec3(1.0);\n#endif\n#include <aomap_fragment>\nreflectedLight.indirectDiffuse*=diffuseColor.rgb;vec3 outgoingLight=reflectedLight.indirectDiffuse;\n#include <envmap_fragment>\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
            meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;varying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <lights_lambert_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
            meshlambert_frag: "uniform vec3 diffuse;uniform vec3 emissive;uniform float opacity;varying vec3 vLightFront;varying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\n#include <emissivemap_fragment>\n#ifdef DOUBLE_SIDED\nreflectedLight.indirectDiffuse+=(gl_FrontFacing)?vIndirectFront:vIndirectBack;\n#else\nreflectedLight.indirectDiffuse+=vIndirectFront;\n#endif\n#include <lightmap_fragment>\nreflectedLight.indirectDiffuse*=BRDF_Lambert(diffuseColor.rgb);\n#ifdef DOUBLE_SIDED\nreflectedLight.directDiffuse=(gl_FrontFacing)?vLightFront:vLightBack;\n#else\nreflectedLight.directDiffuse=vLightFront;\n#endif\nreflectedLight.directDiffuse*=BRDF_Lambert(diffuseColor.rgb)*getShadowMask();\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+totalEmissiveRadiance;\n#include <envmap_fragment>\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
            meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <fog_vertex>\nvViewPosition=-mvPosition.xyz;}",
            meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;uniform float opacity;uniform sampler2D matcap;varying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\nvec3 viewDir=normalize(vViewPosition);vec3 x=normalize(vec3(viewDir.z,0.0,-viewDir.x));vec3 y=cross(viewDir,x);vec2 uv=vec2(dot(x,normal),dot(y,normal))*0.495+0.5;\n#ifdef USE_MATCAP\nvec4 matcapColor=texture2D(matcap,uv);\n#else\nvec4 matcapColor=vec4(vec3(mix(0.2,0.8,uv.y)),1.0);\n#endif\nvec3 outgoingLight=diffuseColor.rgb*matcapColor.rgb;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
            meshnormal_vert: "#define NORMAL\n#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)\nvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)\nvViewPosition=-mvPosition.xyz;\n#endif\n}",
            meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)\nvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\n#include <logdepthbuf_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\ngl_FragColor=vec4(packNormalToRGB(normal),opacity);\n#ifdef OPAQUE\ngl_FragColor.a=1.0;\n#endif\n}",
            meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
            meshphong_frag: "#define PHONG\nuniform vec3 diffuse;uniform vec3 emissive;uniform vec3 specular;uniform float shininess;uniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_phong_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular+totalEmissiveRadiance;\n#include <envmap_fragment>\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
            meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\nvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n#ifdef USE_TRANSMISSION\nvWorldPosition=worldPosition.xyz;\n#endif\n}",
            meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n#define IOR\n#define SPECULAR\n#endif\nuniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;\n#ifdef IOR\nuniform float ior;\n#endif\n#ifdef SPECULAR\nuniform float specularIntensity;uniform vec3 specularColor;\n#ifdef USE_SPECULARINTENSITYMAP\nuniform sampler2D specularIntensityMap;\n#endif\n#ifdef USE_SPECULARCOLORMAP\nuniform sampler2D specularColorMap;\n#endif\n#endif\n#ifdef USE_CLEARCOAT\nuniform float clearcoat;uniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\nuniform float iridescence;uniform float iridescenceIOR;uniform float iridescenceThicknessMinimum;uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\nuniform vec3 sheenColor;uniform float sheenRoughness;\n#ifdef USE_SHEENCOLORMAP\nuniform sampler2D sheenColorMap;\n#endif\n#ifdef USE_SHEENROUGHNESSMAP\nuniform sampler2D sheenRoughnessMap;\n#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <roughnessmap_fragment>\n#include <metalnessmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <clearcoat_normal_fragment_begin>\n#include <clearcoat_normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_physical_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 totalDiffuse=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse;vec3 totalSpecular=reflectedLight.directSpecular+reflectedLight.indirectSpecular;\n#include <transmission_fragment>\nvec3 outgoingLight=totalDiffuse+totalSpecular+totalEmissiveRadiance;\n#ifdef USE_SHEEN\nfloat sheenEnergyComp=1.0-0.157*max3(material.sheenColor);outgoingLight=outgoingLight*sheenEnergyComp+sheenSpecular;\n#endif\n#ifdef USE_CLEARCOAT\nfloat dotNVcc=saturate(dot(geometry.clearcoatNormal,geometry.viewDir));vec3 Fcc=F_Schlick(material.clearcoatF0,material.clearcoatF90,dotNVcc);outgoingLight=outgoingLight*(1.0-material.clearcoat*Fcc)+clearcoatSpecular*material.clearcoat;\n#endif\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
            meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
            meshtoon_frag: "#define TOON\nuniform vec3 diffuse;uniform vec3 emissive;uniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_toon_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+totalEmissiveRadiance;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
            points_vert: "uniform float size;uniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\ngl_PointSize=size;\n#ifdef USE_SIZEATTENUATION\nbool isPerspective=isPerspectiveMatrix(projectionMatrix);if(isPerspective)gl_PointSize*=(scale/-mvPosition.z);\n#endif\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <fog_vertex>\n}",
            points_frag: "uniform vec3 diffuse;uniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_particle_fragment>\n#include <color_fragment>\n#include <alphatest_fragment>\noutgoingLight=diffuseColor.rgb;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n}",
            shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main(){\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
            shadow_frag: "uniform vec3 color;uniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main(){gl_FragColor=vec4(color,opacity*(1.0-getShadowMask()));\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n}",
            sprite_vert: "uniform float rotation;uniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\nvec4 mvPosition=modelViewMatrix*vec4(0.0,0.0,0.0,1.0);vec2 scale;scale.x=length(vec3(modelMatrix[0].x,modelMatrix[0].y,modelMatrix[0].z));scale.y=length(vec3(modelMatrix[1].x,modelMatrix[1].y,modelMatrix[1].z));\n#ifndef USE_SIZEATTENUATION\nbool isPerspective=isPerspectiveMatrix(projectionMatrix);if(isPerspective)scale*=-mvPosition.z;\n#endif\nvec2 alignedPosition=(position.xy-(center-vec2(0.5)))*scale;vec2 rotatedPosition;rotatedPosition.x=cos(rotation)*alignedPosition.x-sin(rotation)*alignedPosition.y;rotatedPosition.y=sin(rotation)*alignedPosition.x+cos(rotation)*alignedPosition.y;mvPosition.xy+=rotatedPosition;gl_Position=projectionMatrix*mvPosition;\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <fog_vertex>\n}",
            sprite_frag: "uniform vec3 diffuse;uniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\noutgoingLight=diffuseColor.rgb;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n}"
        },
        Fi = {
            common: {
                diffuse: {
                    value: new le(16777215)
                },
                opacity: {
                    value: 1
                },
                map: {
                    value: null
                },
                uvTransform: {
                    value: new Z
                },
                uv2Transform: {
                    value: new Z
                },
                alphaMap: {
                    value: null
                },
                alphaTest: {
                    value: 0
                }
            },
            specularmap: {
                specularMap: {
                    value: null
                }
            },
            envmap: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                },
                reflectivity: {
                    value: 1
                },
                ior: {
                    value: 1.5
                },
                refractionRatio: {
                    value: .98
                }
            },
            aomap: {
                aoMap: {
                    value: null
                },
                aoMapIntensity: {
                    value: 1
                }
            },
            lightmap: {
                lightMap: {
                    value: null
                },
                lightMapIntensity: {
                    value: 1
                }
            },
            emissivemap: {
                emissiveMap: {
                    value: null
                }
            },
            bumpmap: {
                bumpMap: {
                    value: null
                },
                bumpScale: {
                    value: 1
                }
            },
            normalmap: {
                normalMap: {
                    value: null
                },
                normalScale: {
                    value: new Y(1, 1)
                }
            },
            displacementmap: {
                displacementMap: {
                    value: null
                },
                displacementScale: {
                    value: 1
                },
                displacementBias: {
                    value: 0
                }
            },
            roughnessmap: {
                roughnessMap: {
                    value: null
                }
            },
            metalnessmap: {
                metalnessMap: {
                    value: null
                }
            },
            gradientmap: {
                gradientMap: {
                    value: null
                }
            },
            fog: {
                fogDensity: {
                    value: 25e-5
                },
                fogNear: {
                    value: 1
                },
                fogFar: {
                    value: 2e3
                },
                fogColor: {
                    value: new le(16777215)
                }
            },
            lights: {
                ambientLightColor: {
                    value: []
                },
                lightProbe: {
                    value: []
                },
                directionalLights: {
                    value: [],
                    properties: {
                        direction: {},
                        color: {}
                    }
                },
                directionalLightShadows: {
                    value: [],
                    properties: {
                        shadowBias: {},
                        shadowNormalBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                directionalShadowMap: {
                    value: []
                },
                directionalShadowMatrix: {
                    value: []
                },
                spotLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        direction: {},
                        distance: {},
                        coneCos: {},
                        penumbraCos: {},
                        decay: {}
                    }
                },
                spotLightShadows: {
                    value: [],
                    properties: {
                        shadowBias: {},
                        shadowNormalBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                spotShadowMap: {
                    value: []
                },
                spotShadowMatrix: {
                    value: []
                },
                pointLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        decay: {},
                        distance: {}
                    }
                },
                pointLightShadows: {
                    value: [],
                    properties: {
                        shadowBias: {},
                        shadowNormalBias: {},
                        shadowRadius: {},
                        shadowMapSize: {},
                        shadowCameraNear: {},
                        shadowCameraFar: {}
                    }
                },
                pointShadowMap: {
                    value: []
                },
                pointShadowMatrix: {
                    value: []
                },
                hemisphereLights: {
                    value: [],
                    properties: {
                        direction: {},
                        skyColor: {},
                        groundColor: {}
                    }
                },
                rectAreaLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        width: {},
                        height: {}
                    }
                },
                ltc_1: {
                    value: null
                },
                ltc_2: {
                    value: null
                }
            },
            points: {
                diffuse: {
                    value: new le(16777215)
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: 1
                },
                scale: {
                    value: 1
                },
                map: {
                    value: null
                },
                alphaMap: {
                    value: null
                },
                alphaTest: {
                    value: 0
                },
                uvTransform: {
                    value: new Z
                }
            },
            sprite: {
                diffuse: {
                    value: new le(16777215)
                },
                opacity: {
                    value: 1
                },
                center: {
                    value: new Y(.5, .5)
                },
                rotation: {
                    value: 0
                },
                map: {
                    value: null
                },
                alphaMap: {
                    value: null
                },
                alphaTest: {
                    value: 0
                },
                uvTransform: {
                    value: new Z
                }
            }
        },
        Bi = {
            basic: {
                uniforms: _i([Fi.common, Fi.specularmap, Fi.envmap, Fi.aomap, Fi.lightmap, Fi.fog]),
                vertexShader: Ui.meshbasic_vert,
                fragmentShader: Ui.meshbasic_frag
            },
            lambert: {
                uniforms: _i([Fi.common, Fi.specularmap, Fi.envmap, Fi.aomap, Fi.lightmap, Fi.emissivemap, Fi.fog, Fi.lights, {
                    emissive: {
                        value: new le(0)
                    }
                }]),
                vertexShader: Ui.meshlambert_vert,
                fragmentShader: Ui.meshlambert_frag
            },
            phong: {
                uniforms: _i([Fi.common, Fi.specularmap, Fi.envmap, Fi.aomap, Fi.lightmap, Fi.emissivemap, Fi.bumpmap, Fi.normalmap, Fi.displacementmap, Fi.fog, Fi.lights, {
                    emissive: {
                        value: new le(0)
                    },
                    specular: {
                        value: new le(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }]),
                vertexShader: Ui.meshphong_vert,
                fragmentShader: Ui.meshphong_frag
            },
            standard: {
                uniforms: _i([Fi.common, Fi.envmap, Fi.aomap, Fi.lightmap, Fi.emissivemap, Fi.bumpmap, Fi.normalmap, Fi.displacementmap, Fi.roughnessmap, Fi.metalnessmap, Fi.fog, Fi.lights, {
                    emissive: {
                        value: new le(0)
                    },
                    roughness: {
                        value: 1
                    },
                    metalness: {
                        value: 0
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }]),
                vertexShader: Ui.meshphysical_vert,
                fragmentShader: Ui.meshphysical_frag
            },
            toon: {
                uniforms: _i([Fi.common, Fi.aomap, Fi.lightmap, Fi.emissivemap, Fi.bumpmap, Fi.normalmap, Fi.displacementmap, Fi.gradientmap, Fi.fog, Fi.lights, {
                    emissive: {
                        value: new le(0)
                    }
                }]),
                vertexShader: Ui.meshtoon_vert,
                fragmentShader: Ui.meshtoon_frag
            },
            matcap: {
                uniforms: _i([Fi.common, Fi.bumpmap, Fi.normalmap, Fi.displacementmap, Fi.fog, {
                    matcap: {
                        value: null
                    }
                }]),
                vertexShader: Ui.meshmatcap_vert,
                fragmentShader: Ui.meshmatcap_frag
            },
            points: {
                uniforms: _i([Fi.points, Fi.fog]),
                vertexShader: Ui.points_vert,
                fragmentShader: Ui.points_frag
            },
            dashed: {
                uniforms: _i([Fi.common, Fi.fog, {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }]),
                vertexShader: Ui.linedashed_vert,
                fragmentShader: Ui.linedashed_frag
            },
            depth: {
                uniforms: _i([Fi.common, Fi.displacementmap]),
                vertexShader: Ui.depth_vert,
                fragmentShader: Ui.depth_frag
            },
            normal: {
                uniforms: _i([Fi.common, Fi.bumpmap, Fi.normalmap, Fi.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: Ui.meshnormal_vert,
                fragmentShader: Ui.meshnormal_frag
            },
            sprite: {
                uniforms: _i([Fi.sprite, Fi.fog]),
                vertexShader: Ui.sprite_vert,
                fragmentShader: Ui.sprite_frag
            },
            background: {
                uniforms: {
                    uvTransform: {
                        value: new Z
                    },
                    t2D: {
                        value: null
                    }
                },
                vertexShader: Ui.background_vert,
                fragmentShader: Ui.background_frag
            },
            cube: {
                uniforms: _i([Fi.envmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: Ui.cube_vert,
                fragmentShader: Ui.cube_frag
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: Ui.equirect_vert,
                fragmentShader: Ui.equirect_frag
            },
            distanceRGBA: {
                uniforms: _i([Fi.common, Fi.displacementmap, {
                    referencePosition: {
                        value: new ye
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }]),
                vertexShader: Ui.distanceRGBA_vert,
                fragmentShader: Ui.distanceRGBA_frag
            },
            shadow: {
                uniforms: _i([Fi.lights, Fi.fog, {
                    color: {
                        value: new le(0)
                    },
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: Ui.shadow_vert,
                fragmentShader: Ui.shadow_frag
            }
        };

    function ki(e, t, i, n, r, a) {
        const s = new le(0);
        let o, l, c = !0 === r ? 0 : 1,
            h = null,
            u = 0,
            p = null;

        function f(e, t) {
            i.buffers.color.setClear(e.r, e.g, e.b, t, a)
        }
        return {
            getClearColor: function() {
                return s
            },
            setClearColor: function(e, t = 1) {
                s.set(e), c = t, f(s, c)
            },
            getClearAlpha: function() {
                return c
            },
            setClearAlpha: function(e) {
                c = e, f(s, c)
            },
            render: function(i, r) {
                let a = !1,
                    m = !0 === r.isScene ? r.background : null;
                m && m.isTexture && (m = t.get(m));
                const g = e.xr,
                    v = g.getSession && g.getSession();
                v && "additive" === v.environmentBlendMode && (m = null), null === m ? f(s, c) : m && m.isColor && (f(m, 1), a = !0), (e.autoClear || a) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), m && (m.isCubeTexture || m.mapping === d) ? (void 0 === l && (l = new fi(new gi(1, 1, 1), new yi({
                    name: "BackgroundCubeMaterial",
                    uniforms: vi(Bi.cube.uniforms),
                    vertexShader: Bi.cube.vertexShader,
                    fragmentShader: Bi.cube.fragmentShader,
                    side: 1,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(e, t, i) {
                    this.matrixWorld.copyPosition(i.matrixWorld)
                }, Object.defineProperty(l.material, "envMap", {
                    get: function() {
                        return this.uniforms.envMap.value
                    }
                }), n.update(l)), l.material.uniforms.envMap.value = m, l.material.uniforms.flipEnvMap.value = m.isCubeTexture && !1 === m.isRenderTargetTexture ? -1 : 1, h === m && u === m.version && p === e.toneMapping || (l.material.needsUpdate = !0, h = m, u = m.version, p = e.toneMapping), l.layers.enableAll(), i.unshift(l, l.geometry, l.material, 0, 0, null)) : m && m.isTexture && (void 0 === o && (o = new fi(new Oi(2, 2), new yi({
                    name: "BackgroundMaterial",
                    uniforms: vi(Bi.background.uniforms),
                    vertexShader: Bi.background.vertexShader,
                    fragmentShader: Bi.background.fragmentShader,
                    side: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
                    get: function() {
                        return this.uniforms.t2D.value
                    }
                }), n.update(o)), o.material.uniforms.t2D.value = m, !0 === m.matrixAutoUpdate && m.updateMatrix(), o.material.uniforms.uvTransform.value.copy(m.matrix), h === m && u === m.version && p === e.toneMapping || (o.material.needsUpdate = !0, h = m, u = m.version, p = e.toneMapping), o.layers.enableAll(), i.unshift(o, o.geometry, o.material, 0, 0, null))
            }
        }
    }

    function Hi(e, t, i, n) {
        const r = e.getParameter(34921),
            a = n.isWebGL2 ? null : t.get("OES_vertex_array_object"),
            s = n.isWebGL2 || null !== a,
            o = {},
            l = p(null);
        let c = l,
            h = !1;

        function u(t) {
            return n.isWebGL2 ? e.bindVertexArray(t) : a.bindVertexArrayOES(t)
        }

        function d(t) {
            return n.isWebGL2 ? e.deleteVertexArray(t) : a.deleteVertexArrayOES(t)
        }

        function p(e) {
            const t = [],
                i = [],
                n = [];
            for (let e = 0; e < r; e++) t[e] = 0, i[e] = 0, n[e] = 0;
            return {
                geometry: null,
                program: null,
                wireframe: !1,
                newAttributes: t,
                enabledAttributes: i,
                attributeDivisors: n,
                object: e,
                attributes: {},
                index: null
            }
        }

        function f() {
            const e = c.newAttributes;
            for (let t = 0, i = e.length; t < i; t++) e[t] = 0
        }

        function m(e) {
            g(e, 0)
        }

        function g(i, r) {
            const a = c.newAttributes,
                s = c.enabledAttributes,
                o = c.attributeDivisors;
            if (a[i] = 1, 0 === s[i] && (e.enableVertexAttribArray(i), s[i] = 1), o[i] !== r) {
                (n.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i, r), o[i] = r
            }
        }

        function v() {
            const t = c.newAttributes,
                i = c.enabledAttributes;
            for (let n = 0, r = i.length; n < r; n++) i[n] !== t[n] && (e.disableVertexAttribArray(n), i[n] = 0)
        }

        function _(t, i, r, a, s, o) {
            !0 !== n.isWebGL2 || 5124 !== r && 5125 !== r ? e.vertexAttribPointer(t, i, r, a, s, o) : e.vertexAttribIPointer(t, i, r, s, o)
        }

        function x() {
            y(), h = !0, c !== l && (c = l, u(c.object))
        }

        function y() {
            l.geometry = null, l.program = null, l.wireframe = !1
        }
        return {
            setup: function(r, l, d, x, y) {
                let M = !1;
                if (s) {
                    const t = function(t, i, r) {
                        const s = !0 === r.wireframe;
                        let l = o[t.id];
                        void 0 === l && (l = {}, o[t.id] = l);
                        let c = l[i.id];
                        void 0 === c && (c = {}, l[i.id] = c);
                        let h = c[s];
                        void 0 === h && (h = p(n.isWebGL2 ? e.createVertexArray() : a.createVertexArrayOES()), c[s] = h);
                        return h
                    }(x, d, l);
                    c !== t && (c = t, u(c.object)), M = function(e, t, i, n) {
                        const r = c.attributes,
                            a = t.attributes;
                        let s = 0;
                        const o = i.getAttributes();
                        for (const t in o) {
                            if (o[t].location >= 0) {
                                const i = r[t];
                                let n = a[t];
                                if (void 0 === n && ("instanceMatrix" === t && e.instanceMatrix && (n = e.instanceMatrix), "instanceColor" === t && e.instanceColor && (n = e.instanceColor)), void 0 === i) return !0;
                                if (i.attribute !== n) return !0;
                                if (n && i.data !== n.data) return !0;
                                s++
                            }
                        }
                        return c.attributesNum !== s || c.index !== n
                    }(r, x, d, y), M && function(e, t, i, n) {
                        const r = {},
                            a = t.attributes;
                        let s = 0;
                        const o = i.getAttributes();
                        for (const t in o) {
                            if (o[t].location >= 0) {
                                let i = a[t];
                                void 0 === i && ("instanceMatrix" === t && e.instanceMatrix && (i = e.instanceMatrix), "instanceColor" === t && e.instanceColor && (i = e.instanceColor));
                                const n = {};
                                n.attribute = i, i && i.data && (n.data = i.data), r[t] = n, s++
                            }
                        }
                        c.attributes = r, c.attributesNum = s, c.index = n
                    }(r, x, d, y)
                } else {
                    const e = !0 === l.wireframe;
                    c.geometry === x.id && c.program === d.id && c.wireframe === e || (c.geometry = x.id, c.program = d.id, c.wireframe = e, M = !0)
                }
                null !== y && i.update(y, 34963), (M || h) && (h = !1, function(r, a, s, o) {
                    if (!1 === n.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === t.get("ANGLE_instanced_arrays")) return;
                    f();
                    const l = o.attributes,
                        c = s.getAttributes(),
                        h = a.defaultAttributeValues;
                    for (const t in c) {
                        const n = c[t];
                        if (n.location >= 0) {
                            let a = l[t];
                            if (void 0 === a && ("instanceMatrix" === t && r.instanceMatrix && (a = r.instanceMatrix), "instanceColor" === t && r.instanceColor && (a = r.instanceColor)), void 0 !== a) {
                                const t = a.normalized,
                                    s = a.itemSize,
                                    l = i.get(a);
                                if (void 0 === l) continue;
                                const c = l.buffer,
                                    h = l.type,
                                    u = l.bytesPerElement;
                                if (a.isInterleavedBufferAttribute) {
                                    const i = a.data,
                                        l = i.stride,
                                        d = a.offset;
                                    if (i.isInstancedInterleavedBuffer) {
                                        for (let e = 0; e < n.locationSize; e++) g(n.location + e, i.meshPerAttribute);
                                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = i.meshPerAttribute * i.count)
                                    } else
                                        for (let e = 0; e < n.locationSize; e++) m(n.location + e);
                                    e.bindBuffer(34962, c);
                                    for (let e = 0; e < n.locationSize; e++) _(n.location + e, s / n.locationSize, h, t, l * u, (d + s / n.locationSize * e) * u)
                                } else {
                                    if (a.isInstancedBufferAttribute) {
                                        for (let e = 0; e < n.locationSize; e++) g(n.location + e, a.meshPerAttribute);
                                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = a.meshPerAttribute * a.count)
                                    } else
                                        for (let e = 0; e < n.locationSize; e++) m(n.location + e);
                                    e.bindBuffer(34962, c);
                                    for (let e = 0; e < n.locationSize; e++) _(n.location + e, s / n.locationSize, h, t, s * u, s / n.locationSize * e * u)
                                }
                            } else if (void 0 !== h) {
                                const i = h[t];
                                if (void 0 !== i) switch (i.length) {
                                    case 2:
                                        e.vertexAttrib2fv(n.location, i);
                                        break;
                                    case 3:
                                        e.vertexAttrib3fv(n.location, i);
                                        break;
                                    case 4:
                                        e.vertexAttrib4fv(n.location, i);
                                        break;
                                    default:
                                        e.vertexAttrib1fv(n.location, i)
                                }
                            }
                        }
                    }
                    v()
                }(r, l, d, x), null !== y && e.bindBuffer(34963, i.get(y).buffer))
            },
            reset: x,
            resetDefaultState: y,
            dispose: function() {
                x();
                for (const e in o) {
                    const t = o[e];
                    for (const e in t) {
                        const i = t[e];
                        for (const e in i) d(i[e].object), delete i[e];
                        delete t[e]
                    }
                    delete o[e]
                }
            },
            releaseStatesOfGeometry: function(e) {
                if (void 0 === o[e.id]) return;
                const t = o[e.id];
                for (const e in t) {
                    const i = t[e];
                    for (const e in i) d(i[e].object), delete i[e];
                    delete t[e]
                }
                delete o[e.id]
            },
            releaseStatesOfProgram: function(e) {
                for (const t in o) {
                    const i = o[t];
                    if (void 0 === i[e.id]) continue;
                    const n = i[e.id];
                    for (const e in n) d(n[e].object), delete n[e];
                    delete i[e.id]
                }
            },
            initAttributes: f,
            enableAttribute: m,
            disableUnusedAttributes: v
        }
    }

    function Gi(e, t, i, n) {
        const r = n.isWebGL2;
        let a;
        this.setMode = function(e) {
            a = e
        }, this.render = function(t, n) {
            e.drawArrays(a, t, n), i.update(n, a, 1)
        }, this.renderInstances = function(n, s, o) {
            if (0 === o) return;
            let l, c;
            if (r) l = e, c = "drawArraysInstanced";
            else if (l = t.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            l[c](a, n, s, o), i.update(s, a, o)
        }
    }

    function Vi(e, t, i) {
        let n;

        function r(t) {
            if ("highp" === t) {
                if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                t = "mediump"
            }
            return "mediump" === t && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
        }
        const a = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && e instanceof WebGL2ComputeRenderingContext;
        let s = void 0 !== i.precision ? i.precision : "highp";
        const o = r(s);
        o !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", o, "instead."), s = o);
        const l = a || t.has("WEBGL_draw_buffers"),
            c = !0 === i.logarithmicDepthBuffer,
            h = e.getParameter(34930),
            u = e.getParameter(35660),
            d = e.getParameter(3379),
            p = e.getParameter(34076),
            f = e.getParameter(34921),
            m = e.getParameter(36347),
            g = e.getParameter(36348),
            v = e.getParameter(36349),
            _ = u > 0,
            x = a || t.has("OES_texture_float");
        return {
            isWebGL2: a,
            drawBuffers: l,
            getMaxAnisotropy: function() {
                if (void 0 !== n) return n;
                if (!0 === t.has("EXT_texture_filter_anisotropic")) {
                    const i = t.get("EXT_texture_filter_anisotropic");
                    n = e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                } else n = 0;
                return n
            },
            getMaxPrecision: r,
            precision: s,
            logarithmicDepthBuffer: c,
            maxTextures: h,
            maxVertexTextures: u,
            maxTextureSize: d,
            maxCubemapSize: p,
            maxAttributes: f,
            maxVertexUniforms: m,
            maxVaryings: g,
            maxFragmentUniforms: v,
            vertexTextures: _,
            floatFragmentTextures: x,
            floatVertexTextures: _ && x,
            maxSamples: a ? e.getParameter(36183) : 0
        }
    }

    function Wi(e) {
        const t = this;
        let i = null,
            n = 0,
            r = !1,
            a = !1;
        const s = new Pi,
            o = new Z,
            l = {
                value: null,
                needsUpdate: !1
            };

        function c() {
            l.value !== i && (l.value = i, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0
        }

        function h(e, i, n, r) {
            const a = null !== e ? e.length : 0;
            let c = null;
            if (0 !== a) {
                if (c = l.value, !0 !== r || null === c) {
                    const t = n + 4 * a,
                        r = i.matrixWorldInverse;
                    o.getNormalMatrix(r), (null === c || c.length < t) && (c = new Float32Array(t));
                    for (let t = 0, i = n; t !== a; ++t, i += 4) s.copy(e[t]).applyMatrix4(r, o), s.normal.toArray(c, i), c[i + 3] = s.constant
                }
                l.value = c, l.needsUpdate = !0
            }
            return t.numPlanes = a, t.numIntersection = 0, c
        }
        this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t, a) {
            const s = 0 !== e.length || t || 0 !== n || r;
            return r = t, i = h(e, a, 0), n = e.length, s
        }, this.beginShadows = function() {
            a = !0, h(null)
        }, this.endShadows = function() {
            a = !1, c()
        }, this.setState = function(t, s, o) {
            const u = t.clippingPlanes,
                d = t.clipIntersection,
                p = t.clipShadows,
                f = e.get(t);
            if (!r || null === u || 0 === u.length || a && !p) a ? h(null) : c();
            else {
                const e = a ? 0 : n,
                    t = 4 * e;
                let r = f.clippingState || null;
                l.value = r, r = h(u, s, t, o);
                for (let e = 0; e !== t; ++e) r[e] = i[e];
                f.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += e
            }
        }
    }

    function ji(e) {
        let t = new WeakMap;

        function i(e, t) {
            return t === u ? e.mapping = c : 304 === t && (e.mapping = h), e
        }

        function n(e) {
            const i = e.target;
            i.removeEventListener("dispose", n);
            const r = t.get(i);
            void 0 !== r && (t.delete(i), r.dispose())
        }
        return {
            get: function(r) {
                if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
                    const a = r.mapping;
                    if (a === u || 304 === a) {
                        if (t.has(r)) {
                            return i(t.get(r).texture, r.mapping)
                        } {
                            const a = r.image;
                            if (a && a.height > 0) {
                                const s = new Ei(a.height / 2);
                                return s.fromEquirectangularTexture(e, r), t.set(r, s), r.addEventListener("dispose", n), i(s.texture, r.mapping)
                            }
                            return null
                        }
                    }
                }
                return r
            },
            dispose: function() {
                t = new WeakMap
            }
        }
    }
    Bi.physical = {
        uniforms: _i([Bi.standard.uniforms, {
            clearcoat: {
                value: 0
            },
            clearcoatMap: {
                value: null
            },
            clearcoatRoughness: {
                value: 0
            },
            clearcoatRoughnessMap: {
                value: null
            },
            clearcoatNormalScale: {
                value: new Y(1, 1)
            },
            clearcoatNormalMap: {
                value: null
            },
            iridescence: {
                value: 0
            },
            iridescenceMap: {
                value: null
            },
            iridescenceIOR: {
                value: 1.3
            },
            iridescenceThicknessMinimum: {
                value: 100
            },
            iridescenceThicknessMaximum: {
                value: 400
            },
            iridescenceThicknessMap: {
                value: null
            },
            sheen: {
                value: 0
            },
            sheenColor: {
                value: new le(0)
            },
            sheenColorMap: {
                value: null
            },
            sheenRoughness: {
                value: 1
            },
            sheenRoughnessMap: {
                value: null
            },
            transmission: {
                value: 0
            },
            transmissionMap: {
                value: null
            },
            transmissionSamplerSize: {
                value: new Y
            },
            transmissionSamplerMap: {
                value: null
            },
            thickness: {
                value: 0
            },
            thicknessMap: {
                value: null
            },
            attenuationDistance: {
                value: 0
            },
            attenuationColor: {
                value: new le(0)
            },
            specularIntensity: {
                value: 1
            },
            specularIntensityMap: {
                value: null
            },
            specularColor: {
                value: new le(1, 1, 1)
            },
            specularColorMap: {
                value: null
            }
        }]),
        vertexShader: Ui.meshphysical_vert,
        fragmentShader: Ui.meshphysical_frag
    };
    class qi extends Mi {
        constructor(e = -1, t = 1, i = 1, n = -1, r = .1, a = 2e3) {
            super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = i, this.bottom = n, this.near = r, this.far = a, this.updateProjectionMatrix()
        }
        copy(e, t) {
            return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = null === e.view ? null : Object.assign({}, e.view), this
        }
        setViewOffset(e, t, i, n, r, a) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        }
        updateProjectionMatrix() {
            const e = (this.right - this.left) / (2 * this.zoom),
                t = (this.top - this.bottom) / (2 * this.zoom),
                i = (this.right + this.left) / 2,
                n = (this.top + this.bottom) / 2;
            let r = i - e,
                a = i + e,
                s = n + t,
                o = n - t;
            if (null !== this.view && this.view.enabled) {
                const e = (this.right - this.left) / this.view.fullWidth / this.zoom,
                    t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                r += e * this.view.offsetX, a = r + e * this.view.width, s -= t * this.view.offsetY, o = s - t * this.view.height
            }
            this.projectionMatrix.makeOrthographic(r, a, s, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, null !== this.view && (t.object.view = Object.assign({}, this.view)), t
        }
    }
    const Xi = [.125, .215, .35, .446, .526, .582],
        Yi = 20,
        Zi = new qi,
        Ji = new le;
    let Ki = null;
    const Qi = (1 + Math.sqrt(5)) / 2,
        $i = 1 / Qi,
        en = [new ye(1, 1, 1), new ye(-1, 1, 1), new ye(1, 1, -1), new ye(-1, 1, -1), new ye(0, Qi, $i), new ye(0, Qi, -$i), new ye($i, 0, Qi), new ye(-$i, 0, Qi), new ye(Qi, $i, 0), new ye(-Qi, $i, 0)];
    class tn {
        constructor(e) {
            this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial)
        }
        fromScene(e, t = 0, i = .1, n = 100) {
            Ki = this._renderer.getRenderTarget(), this._setSize(256);
            const r = this._allocateTargets();
            return r.depthBuffer = !0, this._sceneToCubeUV(e, i, n, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r
        }
        fromEquirectangular(e, t = null) {
            return this._fromTexture(e, t)
        }
        fromCubemap(e, t = null) {
            return this._fromTexture(e, t)
        }
        compileCubemapShader() {
            null === this._cubemapMaterial && (this._cubemapMaterial = sn(), this._compileMaterial(this._cubemapMaterial))
        }
        compileEquirectangularShader() {
            null === this._equirectMaterial && (this._equirectMaterial = an(), this._compileMaterial(this._equirectMaterial))
        }
        dispose() {
            this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose()
        }
        _setSize(e) {
            this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax)
        }
        _dispose() {
            null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
            for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose()
        }
        _cleanup(e) {
            this._renderer.setRenderTarget(Ki), e.scissorTest = !1, rn(e, 0, 0, e.width, e.height)
        }
        _fromTexture(e, t) {
            e.mapping === c || e.mapping === h ? this._setSize(0 === e.image.length ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Ki = this._renderer.getRenderTarget();
            const i = t || this._allocateTargets();
            return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i
        }
        _allocateTargets() {
            const e = 3 * Math.max(this._cubeSize, 112),
                t = 4 * this._cubeSize,
                i = {
                    magFilter: v,
                    minFilter: v,
                    generateMipmaps: !1,
                    type: b,
                    format: w,
                    encoding: R,
                    depthBuffer: !1
                },
                n = nn(e, t, i);
            if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== e) {
                null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = nn(e, t, i);
                const {
                    _lodMax: n
                } = this;
                ({
                    sizeLods: this._sizeLods,
                    lodPlanes: this._lodPlanes,
                    sigmas: this._sigmas
                } = function(e) {
                    const t = [],
                        i = [],
                        n = [];
                    let r = e;
                    const a = e - 4 + 1 + Xi.length;
                    for (let s = 0; s < a; s++) {
                        const a = Math.pow(2, r);
                        i.push(a);
                        let o = 1 / a;
                        s > e - 4 ? o = Xi[s - e + 4 - 1] : 0 === s && (o = 0), n.push(o);
                        const l = 1 / (a - 2),
                            c = -l,
                            h = 1 + l,
                            u = [c, c, h, c, h, h, c, c, h, h, c, h],
                            d = 6,
                            p = 6,
                            f = 3,
                            m = 2,
                            g = 1,
                            v = new Float32Array(f * p * d),
                            _ = new Float32Array(m * p * d),
                            x = new Float32Array(g * p * d);
                        for (let e = 0; e < d; e++) {
                            const t = e % 3 * 2 / 3 - 1,
                                i = e > 2 ? 0 : -1,
                                n = [t, i, 0, t + 2 / 3, i, 0, t + 2 / 3, i + 1, 0, t, i, 0, t + 2 / 3, i + 1, 0, t, i + 1, 0];
                            v.set(n, f * p * e), _.set(u, m * p * e);
                            const r = [e, e, e, e, e, e];
                            x.set(r, g * p * e)
                        }
                        const y = new Jt;
                        y.setAttribute("position", new Bt(v, f)), y.setAttribute("uv", new Bt(_, m)), y.setAttribute("faceIndex", new Bt(x, g)), t.push(y), r > 4 && r--
                    }
                    return {
                        lodPlanes: t,
                        sizeLods: i,
                        sigmas: n
                    }
                }(n)), this._blurMaterial = function(e, t, i) {
                    const n = new Float32Array(Yi),
                        r = new ye(0, 1, 0);
                    return new yi({
                        name: "SphericalGaussianBlur",
                        defines: {
                            n: Yi,
                            CUBEUV_TEXEL_WIDTH: 1 / t,
                            CUBEUV_TEXEL_HEIGHT: 1 / i,
                            CUBEUV_MAX_MIP: `${e}.0`
                        },
                        uniforms: {
                            envMap: {
                                value: null
                            },
                            samples: {
                                value: 1
                            },
                            weights: {
                                value: n
                            },
                            latitudinal: {
                                value: !1
                            },
                            dTheta: {
                                value: 0
                            },
                            mipInt: {
                                value: 0
                            },
                            poleAxis: {
                                value: r
                            }
                        },
                        vertexShader: on(),
                        fragmentShader: "precision mediump float;precision mediump int;varying vec3 vOutputDirection;uniform sampler2D envMap;uniform int samples;uniform float weights[n];uniform bool latitudinal;uniform float dTheta;uniform float mipInt;uniform vec3 poleAxis;\n#define ENVMAP_TYPE_CUBE_UV\n#include <cube_uv_reflection_fragment>\nvec3 getSample(float theta,vec3 axis){float cosTheta=cos(theta);vec3 sampleDirection=vOutputDirection*cosTheta+cross(axis,vOutputDirection)*sin(theta)+axis*dot(axis,vOutputDirection)*(1.0-cosTheta);return bilinearCubeUV(envMap,sampleDirection,mipInt);}void main(){vec3 axis=latitudinal?poleAxis:cross(poleAxis,vOutputDirection);if(all(equal(axis,vec3(0.0)))){axis=vec3(vOutputDirection.z,0.0,-vOutputDirection.x);}axis=normalize(axis);gl_FragColor=vec4(0.0,0.0,0.0,1.0);gl_FragColor.rgb+=weights[0]*getSample(0.0,axis);for(int i=1;i<n;i++){if(i>=samples){break;}float theta=dTheta*float(i);gl_FragColor.rgb+=weights[i]*getSample(-1.0*theta,axis);gl_FragColor.rgb+=weights[i]*getSample(theta,axis);}}",
                        blending: 0,
                        depthTest: !1,
                        depthWrite: !1
                    })
                }(n, e, t)
            }
            return n
        }
        _compileMaterial(e) {
            const t = new fi(this._lodPlanes[0], e);
            this._renderer.compile(t, Zi)
        }
        _sceneToCubeUV(e, t, i, n) {
            const r = new bi(90, 1, t, i),
                a = [1, -1, 1, 1, 1, 1],
                s = [1, 1, 1, -1, -1, -1],
                o = this._renderer,
                l = o.autoClear,
                c = o.toneMapping;
            o.getClearColor(Ji), o.toneMapping = 0, o.autoClear = !1;
            const h = new Ot({
                    name: "PMREM.Background",
                    side: 1,
                    depthWrite: !1,
                    depthTest: !1
                }),
                u = new fi(new gi, h);
            let d = !1;
            const p = e.background;
            p ? p.isColor && (h.color.copy(p), e.background = null, d = !0) : (h.color.copy(Ji), d = !0);
            for (let t = 0; t < 6; t++) {
                const i = t % 3;
                0 === i ? (r.up.set(0, a[t], 0), r.lookAt(s[t], 0, 0)) : 1 === i ? (r.up.set(0, 0, a[t]), r.lookAt(0, s[t], 0)) : (r.up.set(0, a[t], 0), r.lookAt(0, 0, s[t]));
                const l = this._cubeSize;
                rn(n, i * l, t > 2 ? l : 0, l, l), o.setRenderTarget(n), d && o.render(u, r), o.render(e, r)
            }
            u.geometry.dispose(), u.material.dispose(), o.toneMapping = c, o.autoClear = l, e.background = p
        }
        _textureToCubeUV(e, t) {
            const i = this._renderer,
                n = e.mapping === c || e.mapping === h;
            n ? (null === this._cubemapMaterial && (this._cubemapMaterial = sn()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === e.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = an());
            const r = n ? this._cubemapMaterial : this._equirectMaterial,
                a = new fi(this._lodPlanes[0], r);
            r.uniforms.envMap.value = e;
            const s = this._cubeSize;
            rn(t, 0, 0, 3 * s, 2 * s), i.setRenderTarget(t), i.render(a, Zi)
        }
        _applyPMREM(e) {
            const t = this._renderer,
                i = t.autoClear;
            t.autoClear = !1;
            for (let t = 1; t < this._lodPlanes.length; t++) {
                const i = Math.sqrt(this._sigmas[t] * this._sigmas[t] - this._sigmas[t - 1] * this._sigmas[t - 1]),
                    n = en[(t - 1) % en.length];
                this._blur(e, t - 1, t, i, n)
            }
            t.autoClear = i
        }
        _blur(e, t, i, n, r) {
            const a = this._pingPongRenderTarget;
            this._halfBlur(e, a, t, i, n, "latitudinal", r), this._halfBlur(a, e, i, i, n, "longitudinal", r)
        }
        _halfBlur(e, t, i, n, r, a, s) {
            const o = this._renderer,
                l = this._blurMaterial;
            "latitudinal" !== a && "longitudinal" !== a && console.error("blur direction must be either latitudinal or longitudinal!");
            const c = new fi(this._lodPlanes[n], l),
                h = l.uniforms,
                u = this._sizeLods[i] - 1,
                d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39,
                p = r / d,
                f = isFinite(r) ? 1 + Math.floor(3 * p) : Yi;
            f > Yi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);
            const m = [];
            let g = 0;
            for (let e = 0; e < Yi; ++e) {
                const t = e / p,
                    i = Math.exp(-t * t / 2);
                m.push(i), 0 === e ? g += i : e < f && (g += 2 * i)
            }
            for (let e = 0; e < m.length; e++) m[e] = m[e] / g;
            h.envMap.value = e.texture, h.samples.value = f, h.weights.value = m, h.latitudinal.value = "latitudinal" === a, s && (h.poleAxis.value = s);
            const {
                _lodMax: v
            } = this;
            h.dTheta.value = d, h.mipInt.value = v - i;
            const _ = this._sizeLods[n];
            rn(t, 3 * _ * (n > v - 4 ? n - v + 4 : 0), 4 * (this._cubeSize - _), 3 * _, 2 * _), o.setRenderTarget(t), o.render(c, Zi)
        }
    }

    function nn(e, t, i) {
        const n = new ge(e, t, i);
        return n.texture.mapping = d, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n
    }

    function rn(e, t, i, n, r) {
        e.viewport.set(t, i, n, r), e.scissor.set(t, i, n, r)
    }

    function an() {
        return new yi({
            name: "EquirectangularToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                }
            },
            vertexShader: on(),
            fragmentShader: "precision mediump float;precision mediump int;varying vec3 vOutputDirection;uniform sampler2D envMap;\n#include <common>\nvoid main(){vec3 outputDirection=normalize(vOutputDirection);vec2 uv=equirectUv(outputDirection);gl_FragColor=vec4(texture2D(envMap,uv).rgb,1.0);}",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        })
    }

    function sn() {
        return new yi({
            name: "CubemapToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                }
            },
            vertexShader: on(),
            fragmentShader: "precision mediump float;precision mediump int;uniform float flipEnvMap;varying vec3 vOutputDirection;uniform samplerCube envMap;void main(){gl_FragColor=textureCube(envMap,vec3(flipEnvMap*vOutputDirection.x,vOutputDirection.yz));}",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        })
    }

    function on() {
        return "precision mediump float;precision mediump int;attribute float faceIndex;varying vec3 vOutputDirection;vec3 getDirection(vec2 uv,float face){uv=2.0*uv-1.0;vec3 direction=vec3(uv,1.0);if(face==0.0){direction=direction.zyx;}else if(face==1.0){direction=direction.xzy;direction.xz*=-1.0;}else if(face==2.0){direction.x*=-1.0;}else if(face==3.0){direction=direction.zyx;direction.xz*=-1.0;}else if(face==4.0){direction=direction.xzy;direction.xy*=-1.0;}else if(face==5.0){direction.z*=-1.0;}return direction;}void main(){vOutputDirection=getDirection(uv,faceIndex);gl_Position=vec4(position,1.0);}"
    }

    function ln(e) {
        let t = new WeakMap,
            i = null;

        function n(e) {
            const i = e.target;
            i.removeEventListener("dispose", n);
            const r = t.get(i);
            void 0 !== r && (t.delete(i), r.dispose())
        }
        return {
            get: function(r) {
                if (r && r.isTexture) {
                    const a = r.mapping,
                        s = a === u || 304 === a,
                        o = a === c || a === h;
                    if (s || o) {
                        if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
                            r.needsPMREMUpdate = !1;
                            let n = t.get(r);
                            return null === i && (i = new tn(e)), n = s ? i.fromEquirectangular(r, n) : i.fromCubemap(r, n), t.set(r, n), n.texture
                        }
                        if (t.has(r)) return t.get(r).texture; {
                            const a = r.image;
                            if (s && a && a.height > 0 || o && a && function(e) {
                                    let t = 0;
                                    const i = 6;
                                    for (let n = 0; n < i; n++) void 0 !== e[n] && t++;
                                    return t === i
                                }(a)) {
                                null === i && (i = new tn(e));
                                const a = s ? i.fromEquirectangular(r) : i.fromCubemap(r);
                                return t.set(r, a), r.addEventListener("dispose", n), a.texture
                            }
                            return null
                        }
                    }
                }
                return r
            },
            dispose: function() {
                t = new WeakMap, null !== i && (i.dispose(), i = null)
            }
        }
    }

    function cn(e) {
        const t = {};

        function i(i) {
            if (void 0 !== t[i]) return t[i];
            let n;
            switch (i) {
                case "WEBGL_depth_texture":
                    n = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    n = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    n = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    n = e.getExtension(i)
            }
            return t[i] = n, n
        }
        return {
            has: function(e) {
                return null !== i(e)
            },
            init: function(e) {
                e.isWebGL2 ? i("EXT_color_buffer_float") : (i("WEBGL_depth_texture"), i("OES_texture_float"), i("OES_texture_half_float"), i("OES_texture_half_float_linear"), i("OES_standard_derivatives"), i("OES_element_index_uint"), i("OES_vertex_array_object"), i("ANGLE_instanced_arrays")), i("OES_texture_float_linear"), i("EXT_color_buffer_half_float"), i("WEBGL_multisampled_render_to_texture")
            },
            get: function(e) {
                const t = i(e);
                return null === t && console.warn("THREE.WebGLRenderer: " + e + " extension not supported."), t
            }
        }
    }

    function hn(e, t, i, n) {
        const r = {},
            a = new WeakMap;

        function s(e) {
            const o = e.target;
            null !== o.index && t.remove(o.index);
            for (const e in o.attributes) t.remove(o.attributes[e]);
            o.removeEventListener("dispose", s), delete r[o.id];
            const l = a.get(o);
            l && (t.remove(l), a.delete(o)), n.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, i.memory.geometries--
        }

        function o(e) {
            const i = [],
                n = e.index,
                r = e.attributes.position;
            let s = 0;
            if (null !== n) {
                const e = n.array;
                s = n.version;
                for (let t = 0, n = e.length; t < n; t += 3) {
                    const n = e[t + 0],
                        r = e[t + 1],
                        a = e[t + 2];
                    i.push(n, r, r, a, a, n)
                }
            } else {
                const e = r.array;
                s = r.version;
                for (let t = 0, n = e.length / 3 - 1; t < n; t += 3) {
                    const e = t + 0,
                        n = t + 1,
                        r = t + 2;
                    i.push(e, n, n, r, r, e)
                }
            }
            const o = new(J(i) ? Ht : kt)(i, 1);
            o.version = s;
            const l = a.get(e);
            l && t.remove(l), a.set(e, o)
        }
        return {
            get: function(e, t) {
                return !0 === r[t.id] || (t.addEventListener("dispose", s), r[t.id] = !0, i.memory.geometries++), t
            },
            update: function(e) {
                const i = e.attributes;
                for (const e in i) t.update(i[e], 34962);
                const n = e.morphAttributes;
                for (const e in n) {
                    const i = n[e];
                    for (let e = 0, n = i.length; e < n; e++) t.update(i[e], 34962)
                }
            },
            getWireframeAttribute: function(e) {
                const t = a.get(e);
                if (t) {
                    const i = e.index;
                    null !== i && t.version < i.version && o(e)
                } else o(e);
                return a.get(e)
            }
        }
    }

    function un(e, t, i, n) {
        const r = n.isWebGL2;
        let a, s, o;
        this.setMode = function(e) {
            a = e
        }, this.setIndex = function(e) {
            s = e.type, o = e.bytesPerElement
        }, this.render = function(t, n) {
            e.drawElements(a, n, s, t * o), i.update(n, a, 1)
        }, this.renderInstances = function(n, l, c) {
            if (0 === c) return;
            let h, u;
            if (r) h = e, u = "drawElementsInstanced";
            else if (h = t.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            h[u](a, l, s, n * o, c), i.update(l, a, c)
        }
    }

    function dn(e) {
        const t = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: t,
            programs: null,
            autoReset: !0,
            reset: function() {
                t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0
            },
            update: function(e, i, n) {
                switch (t.calls++, i) {
                    case 4:
                        t.triangles += n * (e / 3);
                        break;
                    case 1:
                        t.lines += n * (e / 2);
                        break;
                    case 3:
                        t.lines += n * (e - 1);
                        break;
                    case 2:
                        t.lines += n * e;
                        break;
                    case 0:
                        t.points += n * e;
                        break;
                    default:
                        console.error("THREE.WebGLInfo: Unknown draw mode:", i)
                }
            }
        }
    }

    function pn(e, t) {
        return e[0] - t[0]
    }

    function fn(e, t) {
        return Math.abs(t[1]) - Math.abs(e[1])
    }

    function mn(e, t) {
        let i = 1;
        const n = t.isInterleavedBufferAttribute ? t.data.array : t.array;
        n instanceof Int8Array ? i = 127 : n instanceof Uint8Array ? i = 255 : n instanceof Uint16Array ? i = 65535 : n instanceof Int16Array ? i = 32767 : n instanceof Int32Array ? i = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", n), e.divideScalar(i)
    }

    function gn(e, t, i) {
        const n = {},
            r = new Float32Array(8),
            a = new WeakMap,
            s = new me,
            o = [];
        for (let e = 0; e < 8; e++) o[e] = [e, 0];
        return {
            update: function(l, c, h, u) {
                const d = l.morphTargetInfluences;
                if (!0 === t.isWebGL2) {
                    const p = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color,
                        f = void 0 !== p ? p.length : 0;
                    let m = a.get(c);
                    if (void 0 === m || m.count !== f) {
                        void 0 !== m && m.texture.dispose();
                        const _ = void 0 !== c.morphAttributes.position,
                            x = void 0 !== c.morphAttributes.normal,
                            y = void 0 !== c.morphAttributes.color,
                            b = c.morphAttributes.position || [],
                            S = c.morphAttributes.normal || [],
                            w = c.morphAttributes.color || [];
                        let T = 0;
                        !0 === _ && (T = 1), !0 === x && (T = 2), !0 === y && (T = 3);
                        let E = c.attributes.position.count * T,
                            A = 1;
                        E > t.maxTextureSize && (A = Math.ceil(E / t.maxTextureSize), E = t.maxTextureSize);
                        const C = new Float32Array(E * A * 4 * f),
                            L = new ve(C, E, A, f);
                        L.type = M, L.needsUpdate = !0;
                        const P = 4 * T;
                        for (let D = 0; D < f; D++) {
                            const I = b[D],
                                N = S[D],
                                z = w[D],
                                O = E * A * 4 * D;
                            for (let U = 0; U < I.count; U++) {
                                const F = U * P;
                                !0 === _ && (s.fromBufferAttribute(I, U), !0 === I.normalized && mn(s, I), C[O + F + 0] = s.x, C[O + F + 1] = s.y, C[O + F + 2] = s.z, C[O + F + 3] = 0), !0 === x && (s.fromBufferAttribute(N, U), !0 === N.normalized && mn(s, N), C[O + F + 4] = s.x, C[O + F + 5] = s.y, C[O + F + 6] = s.z, C[O + F + 7] = 0), !0 === y && (s.fromBufferAttribute(z, U), !0 === z.normalized && mn(s, z), C[O + F + 8] = s.x, C[O + F + 9] = s.y, C[O + F + 10] = s.z, C[O + F + 11] = 4 === z.itemSize ? s.w : 1)
                            }
                        }

                        function R() {
                            L.dispose(), a.delete(c), c.removeEventListener("dispose", R)
                        }
                        m = {
                            count: f,
                            texture: L,
                            size: new Y(E, A)
                        }, a.set(c, m), c.addEventListener("dispose", R)
                    }
                    let g = 0;
                    for (let B = 0; B < d.length; B++) g += d[B];
                    const v = c.morphTargetsRelative ? 1 : 1 - g;
                    u.getUniforms().setValue(e, "morphTargetBaseInfluence", v), u.getUniforms().setValue(e, "morphTargetInfluences", d), u.getUniforms().setValue(e, "morphTargetsTexture", m.texture, i), u.getUniforms().setValue(e, "morphTargetsTextureSize", m.size)
                } else {
                    const k = void 0 === d ? 0 : d.length;
                    let H = n[c.id];
                    if (void 0 === H || H.length !== k) {
                        H = [];
                        for (let q = 0; q < k; q++) H[q] = [q, 0];
                        n[c.id] = H
                    }
                    for (let X = 0; X < k; X++) {
                        const Z = H[X];
                        Z[0] = X, Z[1] = d[X]
                    }
                    H.sort(fn);
                    for (let J = 0; J < 8; J++) J < k && H[J][1] ? (o[J][0] = H[J][0], o[J][1] = H[J][1]) : (o[J][0] = Number.MAX_SAFE_INTEGER, o[J][1] = 0);
                    o.sort(pn);
                    const G = c.morphAttributes.position,
                        V = c.morphAttributes.normal;
                    let W = 0;
                    for (let K = 0; K < 8; K++) {
                        const Q = o[K],
                            $ = Q[0],
                            ee = Q[1];
                        $ !== Number.MAX_SAFE_INTEGER && ee ? (G && c.getAttribute("morphTarget" + K) !== G[$] && c.setAttribute("morphTarget" + K, G[$]), V && c.getAttribute("morphNormal" + K) !== V[$] && c.setAttribute("morphNormal" + K, V[$]), r[K] = ee, W += ee) : (G && !0 === c.hasAttribute("morphTarget" + K) && c.deleteAttribute("morphTarget" + K), V && !0 === c.hasAttribute("morphNormal" + K) && c.deleteAttribute("morphNormal" + K), r[K] = 0)
                    }
                    const j = c.morphTargetsRelative ? 1 : 1 - W;
                    u.getUniforms().setValue(e, "morphTargetBaseInfluence", j), u.getUniforms().setValue(e, "morphTargetInfluences", r)
                }
            }
        }
    }

    function vn(e, t, i, n) {
        let r = new WeakMap;

        function a(e) {
            const t = e.target;
            t.removeEventListener("dispose", a), i.remove(t.instanceMatrix), null !== t.instanceColor && i.remove(t.instanceColor)
        }
        return {
            update: function(e) {
                const s = n.render.frame,
                    o = e.geometry,
                    l = t.get(e, o);
                return r.get(l) !== s && (t.update(l), r.set(l, s)), e.isInstancedMesh && (!1 === e.hasEventListener("dispose", a) && e.addEventListener("dispose", a), i.update(e.instanceMatrix, 34962), null !== e.instanceColor && i.update(e.instanceColor, 34962)), l
            },
            dispose: function() {
                r = new WeakMap
            }
        }
    }
    const _n = new fe,
        xn = new ve,
        yn = new _e,
        Mn = new Ti,
        bn = [],
        Sn = [],
        wn = new Float32Array(16),
        Tn = new Float32Array(9),
        En = new Float32Array(4);

    function An(e, t, i) {
        const n = e[0];
        if (n <= 0 || n > 0) return e;
        const r = t * i;
        let a = bn[r];
        if (void 0 === a && (a = new Float32Array(r), bn[r] = a), 0 !== t) {
            n.toArray(a, 0);
            for (let n = 1, r = 0; n !== t; ++n) r += i, e[n].toArray(a, r)
        }
        return a
    }

    function Cn(e, t) {
        if (e.length !== t.length) return !1;
        for (let i = 0, n = e.length; i < n; i++)
            if (e[i] !== t[i]) return !1;
        return !0
    }

    function Ln(e, t) {
        for (let i = 0, n = t.length; i < n; i++) e[i] = t[i]
    }

    function Pn(e, t) {
        let i = Sn[t];
        void 0 === i && (i = new Int32Array(t), Sn[t] = i);
        for (let n = 0; n !== t; ++n) i[n] = e.allocateTextureUnit();
        return i
    }

    function Rn(e, t) {
        const i = this.cache;
        i[0] !== t && (e.uniform1f(this.addr, t), i[0] = t)
    }

    function Dn(e, t) {
        const i = this.cache;
        if (void 0 !== t.x) i[0] === t.x && i[1] === t.y || (e.uniform2f(this.addr, t.x, t.y), i[0] = t.x, i[1] = t.y);
        else {
            if (Cn(i, t)) return;
            e.uniform2fv(this.addr, t), Ln(i, t)
        }
    }

    function In(e, t) {
        const i = this.cache;
        if (void 0 !== t.x) i[0] === t.x && i[1] === t.y && i[2] === t.z || (e.uniform3f(this.addr, t.x, t.y, t.z), i[0] = t.x, i[1] = t.y, i[2] = t.z);
        else if (void 0 !== t.r) i[0] === t.r && i[1] === t.g && i[2] === t.b || (e.uniform3f(this.addr, t.r, t.g, t.b), i[0] = t.r, i[1] = t.g, i[2] = t.b);
        else {
            if (Cn(i, t)) return;
            e.uniform3fv(this.addr, t), Ln(i, t)
        }
    }

    function Nn(e, t) {
        const i = this.cache;
        if (void 0 !== t.x) i[0] === t.x && i[1] === t.y && i[2] === t.z && i[3] === t.w || (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), i[0] = t.x, i[1] = t.y, i[2] = t.z, i[3] = t.w);
        else {
            if (Cn(i, t)) return;
            e.uniform4fv(this.addr, t), Ln(i, t)
        }
    }

    function zn(e, t) {
        const i = this.cache,
            n = t.elements;
        if (void 0 === n) {
            if (Cn(i, t)) return;
            e.uniformMatrix2fv(this.addr, !1, t), Ln(i, t)
        } else {
            if (Cn(i, n)) return;
            En.set(n), e.uniformMatrix2fv(this.addr, !1, En), Ln(i, n)
        }
    }

    function On(e, t) {
        const i = this.cache,
            n = t.elements;
        if (void 0 === n) {
            if (Cn(i, t)) return;
            e.uniformMatrix3fv(this.addr, !1, t), Ln(i, t)
        } else {
            if (Cn(i, n)) return;
            Tn.set(n), e.uniformMatrix3fv(this.addr, !1, Tn), Ln(i, n)
        }
    }

    function Un(e, t) {
        const i = this.cache,
            n = t.elements;
        if (void 0 === n) {
            if (Cn(i, t)) return;
            e.uniformMatrix4fv(this.addr, !1, t), Ln(i, t)
        } else {
            if (Cn(i, n)) return;
            wn.set(n), e.uniformMatrix4fv(this.addr, !1, wn), Ln(i, n)
        }
    }

    function Fn(e, t) {
        const i = this.cache;
        i[0] !== t && (e.uniform1i(this.addr, t), i[0] = t)
    }

    function Bn(e, t) {
        const i = this.cache;
        Cn(i, t) || (e.uniform2iv(this.addr, t), Ln(i, t))
    }

    function kn(e, t) {
        const i = this.cache;
        Cn(i, t) || (e.uniform3iv(this.addr, t), Ln(i, t))
    }

    function Hn(e, t) {
        const i = this.cache;
        Cn(i, t) || (e.uniform4iv(this.addr, t), Ln(i, t))
    }

    function Gn(e, t) {
        const i = this.cache;
        i[0] !== t && (e.uniform1ui(this.addr, t), i[0] = t)
    }

    function Vn(e, t) {
        const i = this.cache;
        Cn(i, t) || (e.uniform2uiv(this.addr, t), Ln(i, t))
    }

    function Wn(e, t) {
        const i = this.cache;
        Cn(i, t) || (e.uniform3uiv(this.addr, t), Ln(i, t))
    }

    function jn(e, t) {
        const i = this.cache;
        Cn(i, t) || (e.uniform4uiv(this.addr, t), Ln(i, t))
    }

    function qn(e, t, i) {
        const n = this.cache,
            r = i.allocateTextureUnit();
        n[0] !== r && (e.uniform1i(this.addr, r), n[0] = r), i.setTexture2D(t || _n, r)
    }

    function Xn(e, t, i) {
        const n = this.cache,
            r = i.allocateTextureUnit();
        n[0] !== r && (e.uniform1i(this.addr, r), n[0] = r), i.setTexture3D(t || yn, r)
    }

    function Yn(e, t, i) {
        const n = this.cache,
            r = i.allocateTextureUnit();
        n[0] !== r && (e.uniform1i(this.addr, r), n[0] = r), i.setTextureCube(t || Mn, r)
    }

    function Zn(e, t, i) {
        const n = this.cache,
            r = i.allocateTextureUnit();
        n[0] !== r && (e.uniform1i(this.addr, r), n[0] = r), i.setTexture2DArray(t || xn, r)
    }

    function Jn(e, t) {
        e.uniform1fv(this.addr, t)
    }

    function Kn(e, t) {
        const i = An(t, this.size, 2);
        e.uniform2fv(this.addr, i)
    }

    function Qn(e, t) {
        const i = An(t, this.size, 3);
        e.uniform3fv(this.addr, i)
    }

    function $n(e, t) {
        const i = An(t, this.size, 4);
        e.uniform4fv(this.addr, i)
    }

    function er(e, t) {
        const i = An(t, this.size, 4);
        e.uniformMatrix2fv(this.addr, !1, i)
    }

    function tr(e, t) {
        const i = An(t, this.size, 9);
        e.uniformMatrix3fv(this.addr, !1, i)
    }

    function ir(e, t) {
        const i = An(t, this.size, 16);
        e.uniformMatrix4fv(this.addr, !1, i)
    }

    function nr(e, t) {
        e.uniform1iv(this.addr, t)
    }

    function rr(e, t) {
        e.uniform2iv(this.addr, t)
    }

    function ar(e, t) {
        e.uniform3iv(this.addr, t)
    }

    function sr(e, t) {
        e.uniform4iv(this.addr, t)
    }

    function or(e, t) {
        e.uniform1uiv(this.addr, t)
    }

    function lr(e, t) {
        e.uniform2uiv(this.addr, t)
    }

    function cr(e, t) {
        e.uniform3uiv(this.addr, t)
    }

    function hr(e, t) {
        e.uniform4uiv(this.addr, t)
    }

    function ur(e, t, i) {
        const n = t.length,
            r = Pn(i, n);
        e.uniform1iv(this.addr, r);
        for (let e = 0; e !== n; ++e) i.setTexture2D(t[e] || _n, r[e])
    }

    function dr(e, t, i) {
        const n = t.length,
            r = Pn(i, n);
        e.uniform1iv(this.addr, r);
        for (let e = 0; e !== n; ++e) i.setTexture3D(t[e] || yn, r[e])
    }

    function pr(e, t, i) {
        const n = t.length,
            r = Pn(i, n);
        e.uniform1iv(this.addr, r);
        for (let e = 0; e !== n; ++e) i.setTextureCube(t[e] || Mn, r[e])
    }

    function fr(e, t, i) {
        const n = t.length,
            r = Pn(i, n);
        e.uniform1iv(this.addr, r);
        for (let e = 0; e !== n; ++e) i.setTexture2DArray(t[e] || xn, r[e])
    }
    class mr {
        constructor(e, t, i) {
            this.id = e, this.addr = i, this.cache = [], this.setValue = function(e) {
                switch (e) {
                    case 5126:
                        return Rn;
                    case 35664:
                        return Dn;
                    case 35665:
                        return In;
                    case 35666:
                        return Nn;
                    case 35674:
                        return zn;
                    case 35675:
                        return On;
                    case 35676:
                        return Un;
                    case 5124:
                    case 35670:
                        return Fn;
                    case 35667:
                    case 35671:
                        return Bn;
                    case 35668:
                    case 35672:
                        return kn;
                    case 35669:
                    case 35673:
                        return Hn;
                    case 5125:
                        return Gn;
                    case 36294:
                        return Vn;
                    case 36295:
                        return Wn;
                    case 36296:
                        return jn;
                    case 35678:
                    case 36198:
                    case 36298:
                    case 36306:
                    case 35682:
                        return qn;
                    case 35679:
                    case 36299:
                    case 36307:
                        return Xn;
                    case 35680:
                    case 36300:
                    case 36308:
                    case 36293:
                        return Yn;
                    case 36289:
                    case 36303:
                    case 36311:
                    case 36292:
                        return Zn
                }
            }(t.type)
        }
    }
    class gr {
        constructor(e, t, i) {
            this.id = e, this.addr = i, this.cache = [], this.size = t.size, this.setValue = function(e) {
                switch (e) {
                    case 5126:
                        return Jn;
                    case 35664:
                        return Kn;
                    case 35665:
                        return Qn;
                    case 35666:
                        return $n;
                    case 35674:
                        return er;
                    case 35675:
                        return tr;
                    case 35676:
                        return ir;
                    case 5124:
                    case 35670:
                        return nr;
                    case 35667:
                    case 35671:
                        return rr;
                    case 35668:
                    case 35672:
                        return ar;
                    case 35669:
                    case 35673:
                        return sr;
                    case 5125:
                        return or;
                    case 36294:
                        return lr;
                    case 36295:
                        return cr;
                    case 36296:
                        return hr;
                    case 35678:
                    case 36198:
                    case 36298:
                    case 36306:
                    case 35682:
                        return ur;
                    case 35679:
                    case 36299:
                    case 36307:
                        return dr;
                    case 35680:
                    case 36300:
                    case 36308:
                    case 36293:
                        return pr;
                    case 36289:
                    case 36303:
                    case 36311:
                    case 36292:
                        return fr
                }
            }(t.type)
        }
    }
    class vr {
        constructor(e) {
            this.id = e, this.seq = [], this.map = {}
        }
        setValue(e, t, i) {
            const n = this.seq;
            for (let r = 0, a = n.length; r !== a; ++r) {
                const a = n[r];
                a.setValue(e, t[a.id], i)
            }
        }
    }
    const _r = /(\w+)(\])?(\[|\.)?/g;

    function xr(e, t) {
        e.seq.push(t), e.map[t.id] = t
    }

    function yr(e, t, i) {
        const n = e.name,
            r = n.length;
        for (_r.lastIndex = 0;;) {
            const a = _r.exec(n),
                s = _r.lastIndex;
            let o = a[1];
            const l = "]" === a[2],
                c = a[3];
            if (l && (o |= 0), void 0 === c || "[" === c && s + 2 === r) {
                xr(i, void 0 === c ? new mr(o, e, t) : new gr(o, e, t));
                break
            } {
                let e = i.map[o];
                void 0 === e && (e = new vr(o), xr(i, e)), i = e
            }
        }
    }
    class Mr {
        constructor(e, t) {
            this.seq = [], this.map = {};
            const i = e.getProgramParameter(t, 35718);
            for (let n = 0; n < i; ++n) {
                const i = e.getActiveUniform(t, n);
                yr(i, e.getUniformLocation(t, i.name), this)
            }
        }
        setValue(e, t, i, n) {
            const r = this.map[t];
            void 0 !== r && r.setValue(e, i, n)
        }
        setOptional(e, t, i) {
            const n = t[i];
            void 0 !== n && this.setValue(e, i, n)
        }
        static upload(e, t, i, n) {
            for (let r = 0, a = t.length; r !== a; ++r) {
                const a = t[r],
                    s = i[a.id];
                !1 !== s.needsUpdate && a.setValue(e, s.value, n)
            }
        }
        static seqWithValue(e, t) {
            const i = [];
            for (let n = 0, r = e.length; n !== r; ++n) {
                const r = e[n];
                r.id in t && i.push(r)
            }
            return i
        }
    }

    function br(e, t, i) {
        const n = e.createShader(t);
        return e.shaderSource(n, i), e.compileShader(n), n
    }
    let Sr = 0;

    function wr(e, t, i) {
        const n = e.getShaderParameter(t, 35713),
            r = e.getShaderInfoLog(t).trim();
        if (n && "" === r) return "";
        const a = /ERROR: 0:(\d+)/.exec(r);
        if (a) {
            const n = parseInt(a[1]);
            return i.toUpperCase() + "\n\n" + r + "\n\n" + function(e, t) {
                const i = e.split("\n"),
                    n = [],
                    r = Math.max(t - 6, 0),
                    a = Math.min(t + 6, i.length);
                for (let e = r; e < a; e++) {
                    const r = e + 1;
                    n.push(`${r===t?">":" "} ${r}: ${i[e]}`)
                }
                return n.join("\n")
            }(e.getShaderSource(t), n)
        }
        return r
    }

    function Tr(e, t) {
        const i = function(e) {
            switch (e) {
                case R:
                    return ["Linear", "( value )"];
                case D:
                    return ["sRGB", "( value )"];
                default:
                    return console.warn("THREE.WebGLProgram: Unsupported encoding:", e), ["Linear", "( value )"]
            }
        }(t);
        return "vec4 " + e + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"
    }

    function Er(e, t) {
        let i;
        switch (t) {
            case 1:
                i = "Linear";
                break;
            case 2:
                i = "Reinhard";
                break;
            case 3:
                i = "OptimizedCineon";
                break;
            case 4:
                i = "ACESFilmic";
                break;
            case 5:
                i = "Custom";
                break;
            default:
                console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), i = "Linear"
        }
        return "vec3 " + e + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
    }

    function Ar(e) {
        return "" !== e
    }

    function Cr(e, t) {
        return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
    }

    function Lr(e, t) {
        return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
    }
    const Pr = /^[ \t]*#include +<([\w\d./]+)>/gm;

    function Rr(e) {
        return e.replace(Pr, Dr)
    }

    function Dr(e, t) {
        const i = Ui[t];
        if (void 0 === i) throw new Error("Can not resolve #include <" + t + ">");
        return Rr(i)
    }
    const Ir = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
        Nr = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

    function zr(e) {
        return e.replace(Nr, Ur).replace(Ir, Or)
    }

    function Or(e, t, i, n) {
        return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Ur(e, t, i, n)
    }

    function Ur(e, t, i, n) {
        let r = "";
        for (let e = parseInt(t); e < parseInt(i); e++) r += n.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
        return r
    }

    function Fr(e) {
        let t = "precision " + e.precision + " float;\nprecision " + e.precision + " int;";
        return "highp" === e.precision ? t += "\n#define HIGH_PRECISION" : "mediump" === e.precision ? t += "\n#define MEDIUM_PRECISION" : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"), t
    }

    function Br(e, t, i, n) {
        const r = e.getContext(),
            a = i.defines;
        let s = i.vertexShader,
            o = i.fragmentShader;
        const l = function(e) {
                let t = "SHADOWMAP_TYPE_BASIC";
                return 1 === e.shadowMapType ? t = "SHADOWMAP_TYPE_PCF" : 2 === e.shadowMapType ? t = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === e.shadowMapType && (t = "SHADOWMAP_TYPE_VSM"), t
            }(i),
            u = function(e) {
                let t = "ENVMAP_TYPE_CUBE";
                if (e.envMap) switch (e.envMapMode) {
                    case c:
                    case h:
                        t = "ENVMAP_TYPE_CUBE";
                        break;
                    case d:
                        t = "ENVMAP_TYPE_CUBE_UV"
                }
                return t
            }(i),
            p = function(e) {
                let t = "ENVMAP_MODE_REFLECTION";
                e.envMap && e.envMapMode === h && (t = "ENVMAP_MODE_REFRACTION");
                return t
            }(i),
            f = function(e) {
                let t = "ENVMAP_BLENDING_NONE";
                if (e.envMap) switch (e.combine) {
                    case 0:
                        t = "ENVMAP_BLENDING_MULTIPLY";
                        break;
                    case 1:
                        t = "ENVMAP_BLENDING_MIX";
                        break;
                    case 2:
                        t = "ENVMAP_BLENDING_ADD"
                }
                return t
            }(i),
            m = function(e) {
                const t = e.envMapCubeUVHeight;
                if (null === t) return null;
                const i = Math.log2(t) - 2,
                    n = 1 / t;
                return {
                    texelWidth: 1 / (3 * Math.max(Math.pow(2, i), 112)),
                    texelHeight: n,
                    maxMip: i
                }
            }(i),
            g = i.isWebGL2 ? "" : function(e) {
                return [e.extensionDerivatives || e.envMapCubeUVHeight || e.bumpMap || e.tangentSpaceNormalMap || e.clearcoatNormalMap || e.flatShading || "physical" === e.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (e.extensionFragDepth || e.logarithmicDepthBuffer) && e.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", e.extensionDrawBuffers && e.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (e.extensionShaderTextureLOD || e.envMap || e.transmission) && e.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Ar).join("\n")
            }(i),
            v = function(e) {
                const t = [];
                for (const i in e) {
                    const n = e[i];
                    !1 !== n && t.push("#define " + i + " " + n)
                }
                return t.join("\n")
            }(a),
            _ = r.createProgram();
        let x, y, M = i.glslVersion ? "#version " + i.glslVersion + "\n" : "";
        i.isRawShaderMaterial ? (x = [v].filter(Ar).join("\n"), x.length > 0 && (x += "\n"), y = [g, v].filter(Ar).join("\n"), y.length > 0 && (y += "\n")) : (x = [Fr(i), "#define SHADER_NAME " + i.shaderName, v, i.instancing ? "#define USE_INSTANCING" : "", i.instancingColor ? "#define USE_INSTANCING_COLOR" : "", i.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + p : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", i.displacementMap && i.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", i.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.transmission ? "#define USE_TRANSMISSION" : "", i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i.thicknessMap ? "#define USE_THICKNESSMAP" : "", i.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", i.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", i.vertexTangents ? "#define USE_TANGENT" : "", i.vertexColors ? "#define USE_COLOR" : "", i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i.vertexUvs ? "#define USE_UV" : "", i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.skinning ? "#define USE_SKINNING" : "", i.morphTargets ? "#define USE_MORPHTARGETS" : "", i.morphNormals && !1 === i.flatShading ? "#define USE_MORPHNORMALS" : "", i.morphColors && i.isWebGL2 ? "#define USE_MORPHCOLORS" : "", i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + i.morphTextureStride : "", i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_COUNT " + i.morphTargetsCount : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + l : "", i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Ar).join("\n"), y = [g, Fr(i), "#define SHADER_NAME " + i.shaderName, v, i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.matcap ? "#define USE_MATCAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + u : "", i.envMap ? "#define " + p : "", i.envMap ? "#define " + f : "", m ? "#define CUBEUV_TEXEL_WIDTH " + m.texelWidth : "", m ? "#define CUBEUV_TEXEL_HEIGHT " + m.texelHeight : "", m ? "#define CUBEUV_MAX_MIP " + m.maxMip + ".0" : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i.clearcoat ? "#define USE_CLEARCOAT" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.iridescence ? "#define USE_IRIDESCENCE" : "", i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", i.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.alphaTest ? "#define USE_ALPHATEST" : "", i.sheen ? "#define USE_SHEEN" : "", i.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", i.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", i.transmission ? "#define USE_TRANSMISSION" : "", i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i.thicknessMap ? "#define USE_THICKNESSMAP" : "", i.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", i.vertexTangents ? "#define USE_TANGENT" : "", i.vertexColors || i.instancingColor ? "#define USE_COLOR" : "", i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i.vertexUvs ? "#define USE_UV" : "", i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i.gradientMap ? "#define USE_GRADIENTMAP" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + l : "", i.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", i.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== i.toneMapping ? "#define TONE_MAPPING" : "", 0 !== i.toneMapping ? Ui.tonemapping_pars_fragment : "", 0 !== i.toneMapping ? Er("toneMapping", i.toneMapping) : "", i.dithering ? "#define DITHERING" : "", i.opaque ? "#define OPAQUE" : "", Ui.encodings_pars_fragment, Tr("linearToOutputTexel", i.outputEncoding), i.useDepthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(Ar).join("\n")), s = Rr(s), s = Cr(s, i), s = Lr(s, i), o = Rr(o), o = Cr(o, i), o = Lr(o, i), s = zr(s), o = zr(o), i.isWebGL2 && !0 !== i.isRawShaderMaterial && (M = "#version 300 es\n", x = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + x, y = ["#define varying in", i.glslVersion === U ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", i.glslVersion === U ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + y);
        const b = M + y + o,
            S = br(r, 35633, M + x + s),
            w = br(r, 35632, b);
        if (r.attachShader(_, S), r.attachShader(_, w), void 0 !== i.index0AttributeName ? r.bindAttribLocation(_, 0, i.index0AttributeName) : !0 === i.morphTargets && r.bindAttribLocation(_, 0, "position"), r.linkProgram(_), e.debug.checkShaderErrors) {
            const e = r.getProgramInfoLog(_).trim(),
                t = r.getShaderInfoLog(S).trim(),
                i = r.getShaderInfoLog(w).trim();
            let n = !0,
                a = !0;
            if (!1 === r.getProgramParameter(_, 35714)) {
                n = !1;
                const t = wr(r, S, "vertex"),
                    i = wr(r, w, "fragment");
                console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(_, 35715) + "\n\nProgram Info Log: " + e + "\n" + t + "\n" + i)
            } else "" !== e ? console.warn("THREE.WebGLProgram: Program Info Log:", e) : "" !== t && "" !== i || (a = !1);
            a && (this.diagnostics = {
                runnable: n,
                programLog: e,
                vertexShader: {
                    log: t,
                    prefix: x
                },
                fragmentShader: {
                    log: i,
                    prefix: y
                }
            })
        }
        let T, E;
        return r.deleteShader(S), r.deleteShader(w), this.getUniforms = function() {
            return void 0 === T && (T = new Mr(r, _)), T
        }, this.getAttributes = function() {
            return void 0 === E && (E = function(e, t) {
                const i = {},
                    n = e.getProgramParameter(t, 35721);
                for (let r = 0; r < n; r++) {
                    const n = e.getActiveAttrib(t, r),
                        a = n.name;
                    let s = 1;
                    35674 === n.type && (s = 2), 35675 === n.type && (s = 3), 35676 === n.type && (s = 4), i[a] = {
                        type: n.type,
                        location: e.getAttribLocation(t, a),
                        locationSize: s
                    }
                }
                return i
            }(r, _)), E
        }, this.destroy = function() {
            n.releaseStatesOfProgram(this), r.deleteProgram(_), this.program = void 0
        }, this.name = i.shaderName, this.id = Sr++, this.cacheKey = t, this.usedTimes = 1, this.program = _, this.vertexShader = S, this.fragmentShader = w, this
    }
    let kr = 0;
    class Hr {
        constructor() {
            this.shaderCache = new Map, this.materialCache = new Map
        }
        update(e) {
            const t = e.vertexShader,
                i = e.fragmentShader,
                n = this._getShaderStage(t),
                r = this._getShaderStage(i),
                a = this._getShaderCacheForMaterial(e);
            return !1 === a.has(n) && (a.add(n), n.usedTimes++), !1 === a.has(r) && (a.add(r), r.usedTimes++), this
        }
        remove(e) {
            const t = this.materialCache.get(e);
            for (const e of t) e.usedTimes--, 0 === e.usedTimes && this.shaderCache.delete(e.code);
            return this.materialCache.delete(e), this
        }
        getVertexShaderID(e) {
            return this._getShaderStage(e.vertexShader).id
        }
        getFragmentShaderID(e) {
            return this._getShaderStage(e.fragmentShader).id
        }
        dispose() {
            this.shaderCache.clear(), this.materialCache.clear()
        }
        _getShaderCacheForMaterial(e) {
            const t = this.materialCache;
            return !1 === t.has(e) && t.set(e, new Set), t.get(e)
        }
        _getShaderStage(e) {
            const t = this.shaderCache;
            if (!1 === t.has(e)) {
                const i = new Gr(e);
                t.set(e, i)
            }
            return t.get(e)
        }
    }
    class Gr {
        constructor(e) {
            this.id = kr++, this.code = e, this.usedTimes = 0
        }
    }

    function Vr(e, t, i, n, r, a, s) {
        const o = new lt,
            l = new Hr,
            c = [],
            h = r.isWebGL2,
            u = r.logarithmicDepthBuffer,
            p = r.vertexTextures;
        let f = r.precision;
        const m = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        };
        return {
            getParameters: function(a, o, c, g, v) {
                const _ = g.fog,
                    x = v.geometry,
                    y = a.isMeshStandardMaterial ? g.environment : null,
                    M = (a.isMeshStandardMaterial ? i : t).get(a.envMap || y),
                    b = M && M.mapping === d ? M.image.height : null,
                    S = m[a.type];
                null !== a.precision && (f = r.getMaxPrecision(a.precision), f !== a.precision && console.warn("THREE.WebGLProgram.getParameters:", a.precision, "not supported, using", f, "instead."));
                const w = x.morphAttributes.position || x.morphAttributes.normal || x.morphAttributes.color,
                    T = void 0 !== w ? w.length : 0;
                let E, A, C, L, P = 0;
                if (void 0 !== x.morphAttributes.position && (P = 1), void 0 !== x.morphAttributes.normal && (P = 2), void 0 !== x.morphAttributes.color && (P = 3), S) {
                    const e = Bi[S];
                    E = e.vertexShader, A = e.fragmentShader
                } else E = a.vertexShader, A = a.fragmentShader, l.update(a), C = l.getVertexShaderID(a), L = l.getFragmentShaderID(a);
                const I = e.getRenderTarget(),
                    N = a.alphaTest > 0,
                    z = a.clearcoat > 0,
                    O = a.iridescence > 0;
                return {
                    isWebGL2: h,
                    shaderID: S,
                    shaderName: a.type,
                    vertexShader: E,
                    fragmentShader: A,
                    defines: a.defines,
                    customVertexShaderID: C,
                    customFragmentShaderID: L,
                    isRawShaderMaterial: !0 === a.isRawShaderMaterial,
                    glslVersion: a.glslVersion,
                    precision: f,
                    instancing: !0 === v.isInstancedMesh,
                    instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor,
                    supportsVertexTextures: p,
                    outputEncoding: null === I ? e.outputEncoding : !0 === I.isXRRenderTarget ? I.texture.encoding : R,
                    map: !!a.map,
                    matcap: !!a.matcap,
                    envMap: !!M,
                    envMapMode: M && M.mapping,
                    envMapCubeUVHeight: b,
                    lightMap: !!a.lightMap,
                    aoMap: !!a.aoMap,
                    emissiveMap: !!a.emissiveMap,
                    bumpMap: !!a.bumpMap,
                    normalMap: !!a.normalMap,
                    objectSpaceNormalMap: 1 === a.normalMapType,
                    tangentSpaceNormalMap: 0 === a.normalMapType,
                    decodeVideoTexture: !!a.map && !0 === a.map.isVideoTexture && a.map.encoding === D,
                    clearcoat: z,
                    clearcoatMap: z && !!a.clearcoatMap,
                    clearcoatRoughnessMap: z && !!a.clearcoatRoughnessMap,
                    clearcoatNormalMap: z && !!a.clearcoatNormalMap,
                    iridescence: O,
                    iridescenceMap: O && !!a.iridescenceMap,
                    iridescenceThicknessMap: O && !!a.iridescenceThicknessMap,
                    displacementMap: !!a.displacementMap,
                    roughnessMap: !!a.roughnessMap,
                    metalnessMap: !!a.metalnessMap,
                    specularMap: !!a.specularMap,
                    specularIntensityMap: !!a.specularIntensityMap,
                    specularColorMap: !!a.specularColorMap,
                    opaque: !1 === a.transparent && 1 === a.blending,
                    alphaMap: !!a.alphaMap,
                    alphaTest: N,
                    gradientMap: !!a.gradientMap,
                    sheen: a.sheen > 0,
                    sheenColorMap: !!a.sheenColorMap,
                    sheenRoughnessMap: !!a.sheenRoughnessMap,
                    transmission: a.transmission > 0,
                    transmissionMap: !!a.transmissionMap,
                    thicknessMap: !!a.thicknessMap,
                    combine: a.combine,
                    vertexTangents: !!a.normalMap && !!x.attributes.tangent,
                    vertexColors: a.vertexColors,
                    vertexAlphas: !0 === a.vertexColors && !!x.attributes.color && 4 === x.attributes.color.itemSize,
                    vertexUvs: !!(a.map || a.bumpMap || a.normalMap || a.specularMap || a.alphaMap || a.emissiveMap || a.roughnessMap || a.metalnessMap || a.clearcoatMap || a.clearcoatRoughnessMap || a.clearcoatNormalMap || a.iridescenceMap || a.iridescenceThicknessMap || a.displacementMap || a.transmissionMap || a.thicknessMap || a.specularIntensityMap || a.specularColorMap || a.sheenColorMap || a.sheenRoughnessMap),
                    uvsVertexOnly: !(a.map || a.bumpMap || a.normalMap || a.specularMap || a.alphaMap || a.emissiveMap || a.roughnessMap || a.metalnessMap || a.clearcoatNormalMap || a.iridescenceMap || a.iridescenceThicknessMap || a.transmission > 0 || a.transmissionMap || a.thicknessMap || a.specularIntensityMap || a.specularColorMap || a.sheen > 0 || a.sheenColorMap || a.sheenRoughnessMap || !a.displacementMap),
                    fog: !!_,
                    useFog: !0 === a.fog,
                    fogExp2: _ && _.isFogExp2,
                    flatShading: !!a.flatShading,
                    sizeAttenuation: a.sizeAttenuation,
                    logarithmicDepthBuffer: u,
                    skinning: !0 === v.isSkinnedMesh,
                    morphTargets: void 0 !== x.morphAttributes.position,
                    morphNormals: void 0 !== x.morphAttributes.normal,
                    morphColors: void 0 !== x.morphAttributes.color,
                    morphTargetsCount: T,
                    morphTextureStride: P,
                    numDirLights: o.directional.length,
                    numPointLights: o.point.length,
                    numSpotLights: o.spot.length,
                    numRectAreaLights: o.rectArea.length,
                    numHemiLights: o.hemi.length,
                    numDirLightShadows: o.directionalShadowMap.length,
                    numPointLightShadows: o.pointShadowMap.length,
                    numSpotLightShadows: o.spotShadowMap.length,
                    numClippingPlanes: s.numPlanes,
                    numClipIntersection: s.numIntersection,
                    dithering: a.dithering,
                    shadowMapEnabled: e.shadowMap.enabled && c.length > 0,
                    shadowMapType: e.shadowMap.type,
                    toneMapping: a.toneMapped ? e.toneMapping : 0,
                    physicallyCorrectLights: e.physicallyCorrectLights,
                    premultipliedAlpha: a.premultipliedAlpha,
                    doubleSided: 2 === a.side,
                    flipSided: 1 === a.side,
                    useDepthPacking: !!a.depthPacking,
                    depthPacking: a.depthPacking || 0,
                    index0AttributeName: a.index0AttributeName,
                    extensionDerivatives: a.extensions && a.extensions.derivatives,
                    extensionFragDepth: a.extensions && a.extensions.fragDepth,
                    extensionDrawBuffers: a.extensions && a.extensions.drawBuffers,
                    extensionShaderTextureLOD: a.extensions && a.extensions.shaderTextureLOD,
                    rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
                    rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
                    rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
                    customProgramCacheKey: a.customProgramCacheKey()
                }
            },
            getProgramCacheKey: function(t) {
                const i = [];
                if (t.shaderID ? i.push(t.shaderID) : (i.push(t.customVertexShaderID), i.push(t.customFragmentShaderID)), void 0 !== t.defines)
                    for (const e in t.defines) i.push(e), i.push(t.defines[e]);
                return !1 === t.isRawShaderMaterial && (! function(e, t) {
                    e.push(t.precision), e.push(t.outputEncoding), e.push(t.envMapMode), e.push(t.envMapCubeUVHeight), e.push(t.combine), e.push(t.vertexUvs), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.morphAttributeCount), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking)
                }(i, t), function(e, t) {
                    o.disableAll(), t.isWebGL2 && o.enable(0);
                    t.supportsVertexTextures && o.enable(1);
                    t.instancing && o.enable(2);
                    t.instancingColor && o.enable(3);
                    t.map && o.enable(4);
                    t.matcap && o.enable(5);
                    t.envMap && o.enable(6);
                    t.lightMap && o.enable(7);
                    t.aoMap && o.enable(8);
                    t.emissiveMap && o.enable(9);
                    t.bumpMap && o.enable(10);
                    t.normalMap && o.enable(11);
                    t.objectSpaceNormalMap && o.enable(12);
                    t.tangentSpaceNormalMap && o.enable(13);
                    t.clearcoat && o.enable(14);
                    t.clearcoatMap && o.enable(15);
                    t.clearcoatRoughnessMap && o.enable(16);
                    t.clearcoatNormalMap && o.enable(17);
                    t.iridescence && o.enable(18);
                    t.iridescenceMap && o.enable(19);
                    t.iridescenceThicknessMap && o.enable(20);
                    t.displacementMap && o.enable(21);
                    t.specularMap && o.enable(22);
                    t.roughnessMap && o.enable(23);
                    t.metalnessMap && o.enable(24);
                    t.gradientMap && o.enable(25);
                    t.alphaMap && o.enable(26);
                    t.alphaTest && o.enable(27);
                    t.vertexColors && o.enable(28);
                    t.vertexAlphas && o.enable(29);
                    t.vertexUvs && o.enable(30);
                    t.vertexTangents && o.enable(31);
                    t.uvsVertexOnly && o.enable(32);
                    t.fog && o.enable(33);
                    e.push(o.mask), o.disableAll(), t.useFog && o.enable(0);
                    t.flatShading && o.enable(1);
                    t.logarithmicDepthBuffer && o.enable(2);
                    t.skinning && o.enable(3);
                    t.morphTargets && o.enable(4);
                    t.morphNormals && o.enable(5);
                    t.morphColors && o.enable(6);
                    t.premultipliedAlpha && o.enable(7);
                    t.shadowMapEnabled && o.enable(8);
                    t.physicallyCorrectLights && o.enable(9);
                    t.doubleSided && o.enable(10);
                    t.flipSided && o.enable(11);
                    t.useDepthPacking && o.enable(12);
                    t.dithering && o.enable(13);
                    t.specularIntensityMap && o.enable(14);
                    t.specularColorMap && o.enable(15);
                    t.transmission && o.enable(16);
                    t.transmissionMap && o.enable(17);
                    t.thicknessMap && o.enable(18);
                    t.sheen && o.enable(19);
                    t.sheenColorMap && o.enable(20);
                    t.sheenRoughnessMap && o.enable(21);
                    t.decodeVideoTexture && o.enable(22);
                    t.opaque && o.enable(23);
                    e.push(o.mask)
                }(i, t), i.push(e.outputEncoding)), i.push(t.customProgramCacheKey), i.join()
            },
            getUniforms: function(e) {
                const t = m[e.type];
                let i;
                if (t) {
                    const e = Bi[t];
                    i = xi.clone(e.uniforms)
                } else i = e.uniforms;
                return i
            },
            acquireProgram: function(t, i) {
                let n;
                for (let e = 0, t = c.length; e < t; e++) {
                    const t = c[e];
                    if (t.cacheKey === i) {
                        n = t, ++n.usedTimes;
                        break
                    }
                }
                return void 0 === n && (n = new Br(e, i, t, a), c.push(n)), n
            },
            releaseProgram: function(e) {
                if (0 == --e.usedTimes) {
                    const t = c.indexOf(e);
                    c[t] = c[c.length - 1], c.pop(), e.destroy()
                }
            },
            releaseShaderCache: function(e) {
                l.remove(e)
            },
            programs: c,
            dispose: function() {
                l.dispose()
            }
        }
    }

    function Wr() {
        let e = new WeakMap;
        return {
            get: function(t) {
                let i = e.get(t);
                return void 0 === i && (i = {}, e.set(t, i)), i
            },
            remove: function(t) {
                e.delete(t)
            },
            update: function(t, i, n) {
                e.get(t)[i] = n
            },
            dispose: function() {
                e = new WeakMap
            }
        }
    }

    function jr(e, t) {
        return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
    }

    function qr(e, t) {
        return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
    }

    function Xr() {
        const e = [];
        let t = 0;
        const i = [],
            n = [],
            r = [];

        function a(i, n, r, a, s, o) {
            let l = e[t];
            return void 0 === l ? (l = {
                id: i.id,
                object: i,
                geometry: n,
                material: r,
                groupOrder: a,
                renderOrder: i.renderOrder,
                z: s,
                group: o
            }, e[t] = l) : (l.id = i.id, l.object = i, l.geometry = n, l.material = r, l.groupOrder = a, l.renderOrder = i.renderOrder, l.z = s, l.group = o), t++, l
        }
        return {
            opaque: i,
            transmissive: n,
            transparent: r,
            init: function() {
                t = 0, i.length = 0, n.length = 0, r.length = 0
            },
            push: function(e, t, s, o, l, c) {
                const h = a(e, t, s, o, l, c);
                s.transmission > 0 ? n.push(h) : !0 === s.transparent ? r.push(h) : i.push(h)
            },
            unshift: function(e, t, s, o, l, c) {
                const h = a(e, t, s, o, l, c);
                s.transmission > 0 ? n.unshift(h) : !0 === s.transparent ? r.unshift(h) : i.unshift(h)
            },
            finish: function() {
                for (let i = t, n = e.length; i < n; i++) {
                    const t = e[i];
                    if (null === t.id) break;
                    t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null
                }
            },
            sort: function(e, t) {
                i.length > 1 && i.sort(e || jr), n.length > 1 && n.sort(t || qr), r.length > 1 && r.sort(t || qr)
            }
        }
    }

    function Yr() {
        let e = new WeakMap;
        return {
            get: function(t, i) {
                let n;
                return !1 === e.has(t) ? (n = new Xr, e.set(t, [n])) : i >= e.get(t).length ? (n = new Xr, e.get(t).push(n)) : n = e.get(t)[i], n
            },
            dispose: function() {
                e = new WeakMap
            }
        }
    }

    function Zr() {
        const e = {};
        return {
            get: function(t) {
                if (void 0 !== e[t.id]) return e[t.id];
                let i;
                switch (t.type) {
                    case "DirectionalLight":
                        i = {
                            direction: new ye,
                            color: new le
                        };
                        break;
                    case "SpotLight":
                        i = {
                            position: new ye,
                            direction: new ye,
                            color: new le,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0
                        };
                        break;
                    case "PointLight":
                        i = {
                            position: new ye,
                            color: new le,
                            distance: 0,
                            decay: 0
                        };
                        break;
                    case "HemisphereLight":
                        i = {
                            direction: new ye,
                            skyColor: new le,
                            groundColor: new le
                        };
                        break;
                    case "RectAreaLight":
                        i = {
                            color: new le,
                            position: new ye,
                            halfWidth: new ye,
                            halfHeight: new ye
                        }
                }
                return e[t.id] = i, i
            }
        }
    }
    let Jr = 0;

    function Kr(e, t) {
        return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0)
    }

    function Qr(e, t) {
        const i = new Zr,
            n = function() {
                const e = {};
                return {
                    get: function(t) {
                        if (void 0 !== e[t.id]) return e[t.id];
                        let i;
                        switch (t.type) {
                            case "DirectionalLight":
                            case "SpotLight":
                                i = {
                                    shadowBias: 0,
                                    shadowNormalBias: 0,
                                    shadowRadius: 1,
                                    shadowMapSize: new Y
                                };
                                break;
                            case "PointLight":
                                i = {
                                    shadowBias: 0,
                                    shadowNormalBias: 0,
                                    shadowRadius: 1,
                                    shadowMapSize: new Y,
                                    shadowCameraNear: 1,
                                    shadowCameraFar: 1e3
                                }
                        }
                        return e[t.id] = i, i
                    }
                }
            }(),
            r = {
                version: 0,
                hash: {
                    directionalLength: -1,
                    pointLength: -1,
                    spotLength: -1,
                    rectAreaLength: -1,
                    hemiLength: -1,
                    numDirectionalShadows: -1,
                    numPointShadows: -1,
                    numSpotShadows: -1
                },
                ambient: [0, 0, 0],
                probe: [],
                directional: [],
                directionalShadow: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotShadow: [],
                spotShadowMap: [],
                spotShadowMatrix: [],
                rectArea: [],
                rectAreaLTC1: null,
                rectAreaLTC2: null,
                point: [],
                pointShadow: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: []
            };
        for (let e = 0; e < 9; e++) r.probe.push(new ye);
        const a = new ye,
            s = new Ke,
            o = new Ke;
        return {
            setup: function(a, s) {
                let o = 0,
                    l = 0,
                    c = 0;
                for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
                let h = 0,
                    u = 0,
                    d = 0,
                    p = 0,
                    f = 0,
                    m = 0,
                    g = 0,
                    v = 0;
                a.sort(Kr);
                const _ = !0 !== s ? Math.PI : 1;
                for (let e = 0, t = a.length; e < t; e++) {
                    const t = a[e],
                        s = t.color,
                        x = t.intensity,
                        y = t.distance,
                        M = t.shadow && t.shadow.map ? t.shadow.map.texture : null;
                    if (t.isAmbientLight) o += s.r * x * _, l += s.g * x * _, c += s.b * x * _;
                    else if (t.isLightProbe)
                        for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(t.sh.coefficients[e], x);
                    else if (t.isDirectionalLight) {
                        const e = i.get(t);
                        if (e.color.copy(t.color).multiplyScalar(t.intensity * _), t.castShadow) {
                            const e = t.shadow,
                                i = n.get(t);
                            i.shadowBias = e.bias, i.shadowNormalBias = e.normalBias, i.shadowRadius = e.radius, i.shadowMapSize = e.mapSize, r.directionalShadow[h] = i, r.directionalShadowMap[h] = M, r.directionalShadowMatrix[h] = t.shadow.matrix, m++
                        }
                        r.directional[h] = e, h++
                    } else if (t.isSpotLight) {
                        const e = i.get(t);
                        if (e.position.setFromMatrixPosition(t.matrixWorld), e.color.copy(s).multiplyScalar(x * _), e.distance = y, e.coneCos = Math.cos(t.angle), e.penumbraCos = Math.cos(t.angle * (1 - t.penumbra)), e.decay = t.decay, t.castShadow) {
                            const e = t.shadow,
                                i = n.get(t);
                            i.shadowBias = e.bias, i.shadowNormalBias = e.normalBias, i.shadowRadius = e.radius, i.shadowMapSize = e.mapSize, r.spotShadow[d] = i, r.spotShadowMap[d] = M, r.spotShadowMatrix[d] = t.shadow.matrix, v++
                        }
                        r.spot[d] = e, d++
                    } else if (t.isRectAreaLight) {
                        const e = i.get(t);
                        e.color.copy(s).multiplyScalar(x), e.halfWidth.set(.5 * t.width, 0, 0), e.halfHeight.set(0, .5 * t.height, 0), r.rectArea[p] = e, p++
                    } else if (t.isPointLight) {
                        const e = i.get(t);
                        if (e.color.copy(t.color).multiplyScalar(t.intensity * _), e.distance = t.distance, e.decay = t.decay, t.castShadow) {
                            const e = t.shadow,
                                i = n.get(t);
                            i.shadowBias = e.bias, i.shadowNormalBias = e.normalBias, i.shadowRadius = e.radius, i.shadowMapSize = e.mapSize, i.shadowCameraNear = e.camera.near, i.shadowCameraFar = e.camera.far, r.pointShadow[u] = i, r.pointShadowMap[u] = M, r.pointShadowMatrix[u] = t.shadow.matrix, g++
                        }
                        r.point[u] = e, u++
                    } else if (t.isHemisphereLight) {
                        const e = i.get(t);
                        e.skyColor.copy(t.color).multiplyScalar(x * _), e.groundColor.copy(t.groundColor).multiplyScalar(x * _), r.hemi[f] = e, f++
                    }
                }
                p > 0 && (t.isWebGL2 || !0 === e.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = Fi.LTC_FLOAT_1, r.rectAreaLTC2 = Fi.LTC_FLOAT_2) : !0 === e.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = Fi.LTC_HALF_1, r.rectAreaLTC2 = Fi.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = l, r.ambient[2] = c;
                const x = r.hash;
                x.directionalLength === h && x.pointLength === u && x.spotLength === d && x.rectAreaLength === p && x.hemiLength === f && x.numDirectionalShadows === m && x.numPointShadows === g && x.numSpotShadows === v || (r.directional.length = h, r.spot.length = d, r.rectArea.length = p, r.point.length = u, r.hemi.length = f, r.directionalShadow.length = m, r.directionalShadowMap.length = m, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = v, r.spotShadowMap.length = v, r.directionalShadowMatrix.length = m, r.pointShadowMatrix.length = g, r.spotShadowMatrix.length = v, x.directionalLength = h, x.pointLength = u, x.spotLength = d, x.rectAreaLength = p, x.hemiLength = f, x.numDirectionalShadows = m, x.numPointShadows = g, x.numSpotShadows = v, r.version = Jr++)
            },
            setupView: function(e, t) {
                let i = 0,
                    n = 0,
                    l = 0,
                    c = 0,
                    h = 0;
                const u = t.matrixWorldInverse;
                for (let t = 0, d = e.length; t < d; t++) {
                    const d = e[t];
                    if (d.isDirectionalLight) {
                        const e = r.directional[i];
                        e.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), e.direction.sub(a), e.direction.transformDirection(u), i++
                    } else if (d.isSpotLight) {
                        const e = r.spot[l];
                        e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(u), e.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), e.direction.sub(a), e.direction.transformDirection(u), l++
                    } else if (d.isRectAreaLight) {
                        const e = r.rectArea[c];
                        e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(u), o.identity(), s.copy(d.matrixWorld), s.premultiply(u), o.extractRotation(s), e.halfWidth.set(.5 * d.width, 0, 0), e.halfHeight.set(0, .5 * d.height, 0), e.halfWidth.applyMatrix4(o), e.halfHeight.applyMatrix4(o), c++
                    } else if (d.isPointLight) {
                        const e = r.point[n];
                        e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(u), n++
                    } else if (d.isHemisphereLight) {
                        const e = r.hemi[h];
                        e.direction.setFromMatrixPosition(d.matrixWorld), e.direction.transformDirection(u), h++
                    }
                }
            },
            state: r
        }
    }

    function $r(e, t) {
        const i = new Qr(e, t),
            n = [],
            r = [];
        return {
            init: function() {
                n.length = 0, r.length = 0
            },
            state: {
                lightsArray: n,
                shadowsArray: r,
                lights: i
            },
            setupLights: function(e) {
                i.setup(n, e)
            },
            setupLightsView: function(e) {
                i.setupView(n, e)
            },
            pushLight: function(e) {
                n.push(e)
            },
            pushShadow: function(e) {
                r.push(e)
            }
        }
    }

    function ea(e, t) {
        let i = new WeakMap;
        return {
            get: function(n, r = 0) {
                let a;
                return !1 === i.has(n) ? (a = new $r(e, t), i.set(n, [a])) : r >= i.get(n).length ? (a = new $r(e, t), i.get(n).push(a)) : a = i.get(n)[r], a
            },
            dispose: function() {
                i = new WeakMap
            }
        }
    }
    class ta extends zt {
        constructor(e) {
            super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e)
        }
        copy(e) {
            return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
        }
    }
    class ia extends zt {
        constructor(e) {
            super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new ye, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e)
        }
        copy(e) {
            return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
        }
    }

    function na(e, t, i) {
        let n = new Ii;
        const r = new Y,
            a = new Y,
            s = new me,
            o = new ta({
                depthPacking: 3201
            }),
            l = new ia,
            c = {},
            h = i.maxTextureSize,
            u = {
                0: 1,
                1: 0,
                2: 2
            },
            d = new yi({
                defines: {
                    VSM_SAMPLES: 8
                },
                uniforms: {
                    shadow_pass: {
                        value: null
                    },
                    resolution: {
                        value: new Y
                    },
                    radius: {
                        value: 4
                    }
                },
                vertexShader: "void main(){gl_Position=vec4(position,1.0);}",
                fragmentShader: "uniform sampler2D shadow_pass;uniform vec2 resolution;uniform float radius;\n#include <packing>\nvoid main(){const float samples=float(VSM_SAMPLES);float mean=0.0;float squared_mean=0.0;float uvStride=samples<=1.0?0.0:2.0/(samples-1.0);float uvStart=samples<=1.0?0.0:-1.0;for(float i=0.0;i<samples;i++){float uvOffset=uvStart+i*uvStride;\n#ifdef HORIZONTAL_PASS\nvec2 distribution=unpackRGBATo2Half(texture2D(shadow_pass,(gl_FragCoord.xy+vec2(uvOffset,0.0)*radius)/resolution));mean+=distribution.x;squared_mean+=distribution.y*distribution.y+distribution.x*distribution.x;\n#else\nfloat depth=unpackRGBAToDepth(texture2D(shadow_pass,(gl_FragCoord.xy+vec2(0.0,uvOffset)*radius)/resolution));mean+=depth;squared_mean+=depth*depth;\n#endif\n}mean=mean/samples;squared_mean=squared_mean/samples;float std_dev=sqrt(squared_mean-mean*mean);gl_FragColor=pack2HalfToRGBA(vec2(mean,std_dev));}"
            }),
            p = d.clone();
        p.defines.HORIZONTAL_PASS = 1;
        const f = new Jt;
        f.setAttribute("position", new Bt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
        const m = new fi(f, d),
            v = this;

        function _(i, n) {
            const a = t.update(m);
            d.defines.VSM_SAMPLES !== i.blurSamples && (d.defines.VSM_SAMPLES = i.blurSamples, p.defines.VSM_SAMPLES = i.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), null === i.mapPass && (i.mapPass = new ge(r.x, r.y)), d.uniforms.shadow_pass.value = i.map.texture, d.uniforms.resolution.value = i.mapSize, d.uniforms.radius.value = i.radius, e.setRenderTarget(i.mapPass), e.clear(), e.renderBufferDirect(n, null, a, d, m, null), p.uniforms.shadow_pass.value = i.mapPass.texture, p.uniforms.resolution.value = i.mapSize, p.uniforms.radius.value = i.radius, e.setRenderTarget(i.map), e.clear(), e.renderBufferDirect(n, null, a, p, m, null)
        }

        function x(t, i, n, r, a, s) {
            let h = null;
            const d = !0 === n.isPointLight ? t.customDistanceMaterial : t.customDepthMaterial;
            if (h = void 0 !== d ? d : !0 === n.isPointLight ? l : o, e.localClippingEnabled && !0 === i.clipShadows && Array.isArray(i.clippingPlanes) && 0 !== i.clippingPlanes.length || i.displacementMap && 0 !== i.displacementScale || i.alphaMap && i.alphaTest > 0) {
                const e = h.uuid,
                    t = i.uuid;
                let n = c[e];
                void 0 === n && (n = {}, c[e] = n);
                let r = n[t];
                void 0 === r && (r = h.clone(), n[t] = r), h = r
            }
            return h.visible = i.visible, h.wireframe = i.wireframe, h.side = 3 === s ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : u[i.side], h.alphaMap = i.alphaMap, h.alphaTest = i.alphaTest, h.clipShadows = i.clipShadows, h.clippingPlanes = i.clippingPlanes, h.clipIntersection = i.clipIntersection, h.displacementMap = i.displacementMap, h.displacementScale = i.displacementScale, h.displacementBias = i.displacementBias, h.wireframeLinewidth = i.wireframeLinewidth, h.linewidth = i.linewidth, !0 === n.isPointLight && !0 === h.isMeshDistanceMaterial && (h.referencePosition.setFromMatrixPosition(n.matrixWorld), h.nearDistance = r, h.farDistance = a), h
        }

        function y(i, r, a, s, o) {
            if (!1 === i.visible) return;
            if (i.layers.test(r.layers) && (i.isMesh || i.isLine || i.isPoints) && (i.castShadow || i.receiveShadow && 3 === o) && (!i.frustumCulled || n.intersectsObject(i))) {
                i.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, i.matrixWorld);
                const n = t.update(i),
                    r = i.material;
                if (Array.isArray(r)) {
                    const t = n.groups;
                    for (let l = 0, c = t.length; l < c; l++) {
                        const c = t[l],
                            h = r[c.materialIndex];
                        if (h && h.visible) {
                            const t = x(i, h, s, a.near, a.far, o);
                            e.renderBufferDirect(a, null, n, t, i, c)
                        }
                    }
                } else if (r.visible) {
                    const t = x(i, r, s, a.near, a.far, o);
                    e.renderBufferDirect(a, null, n, t, i, null)
                }
            }
            const l = i.children;
            for (let e = 0, t = l.length; e < t; e++) y(l[e], r, a, s, o)
        }
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(t, i, o) {
            if (!1 === v.enabled) return;
            if (!1 === v.autoUpdate && !1 === v.needsUpdate) return;
            if (0 === t.length) return;
            const l = e.getRenderTarget(),
                c = e.getActiveCubeFace(),
                u = e.getActiveMipmapLevel(),
                d = e.state;
            d.setBlending(0), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
            for (let l = 0, c = t.length; l < c; l++) {
                const c = t[l],
                    u = c.shadow;
                if (void 0 === u) {
                    console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
                    continue
                }
                if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
                r.copy(u.mapSize);
                const p = u.getFrameExtents();
                if (r.multiply(p), a.copy(u.mapSize), (r.x > h || r.y > h) && (r.x > h && (a.x = Math.floor(h / p.x), r.x = a.x * p.x, u.mapSize.x = a.x), r.y > h && (a.y = Math.floor(h / p.y), r.y = a.y * p.y, u.mapSize.y = a.y)), null === u.map) {
                    const e = 3 !== this.type ? {
                        minFilter: g,
                        magFilter: g
                    } : {};
                    u.map = new ge(r.x, r.y, e), u.map.texture.name = c.name + ".shadowMap", u.camera.updateProjectionMatrix()
                }
                e.setRenderTarget(u.map), e.clear();
                const f = u.getViewportCount();
                for (let e = 0; e < f; e++) {
                    const t = u.getViewport(e);
                    s.set(a.x * t.x, a.y * t.y, a.x * t.z, a.y * t.w), d.viewport(s), u.updateMatrices(c, e), n = u.getFrustum(), y(i, o, u.camera, c, this.type)
                }!0 !== u.isPointLightShadow && 3 === this.type && _(u, o), u.needsUpdate = !1
            }
            v.needsUpdate = !1, e.setRenderTarget(l, c, u)
        }
    }

    function ra(e, t, i) {
        const n = i.isWebGL2;
        const r = new function() {
                let t = !1;
                const i = new me;
                let n = null;
                const r = new me(0, 0, 0, 0);
                return {
                    setMask: function(i) {
                        n === i || t || (e.colorMask(i, i, i, i), n = i)
                    },
                    setLocked: function(e) {
                        t = e
                    },
                    setClear: function(t, n, a, s, o) {
                        !0 === o && (t *= s, n *= s, a *= s), i.set(t, n, a, s), !1 === r.equals(i) && (e.clearColor(t, n, a, s), r.copy(i))
                    },
                    reset: function() {
                        t = !1, n = null, r.set(-1, 0, 0, 0)
                    }
                }
            },
            a = new function() {
                let t = !1,
                    i = null,
                    n = null,
                    r = null;
                return {
                    setTest: function(e) {
                        e ? B(2929) : k(2929)
                    },
                    setMask: function(n) {
                        i === n || t || (e.depthMask(n), i = n)
                    },
                    setFunc: function(t) {
                        if (n !== t) {
                            if (t) switch (t) {
                                case 0:
                                    e.depthFunc(512);
                                    break;
                                case 1:
                                    e.depthFunc(519);
                                    break;
                                case 2:
                                    e.depthFunc(513);
                                    break;
                                case 3:
                                default:
                                    e.depthFunc(515);
                                    break;
                                case 4:
                                    e.depthFunc(514);
                                    break;
                                case 5:
                                    e.depthFunc(518);
                                    break;
                                case 6:
                                    e.depthFunc(516);
                                    break;
                                case 7:
                                    e.depthFunc(517)
                            } else e.depthFunc(515);
                            n = t
                        }
                    },
                    setLocked: function(e) {
                        t = e
                    },
                    setClear: function(t) {
                        r !== t && (e.clearDepth(t), r = t)
                    },
                    reset: function() {
                        t = !1, i = null, n = null, r = null
                    }
                }
            },
            s = new function() {
                let t = !1,
                    i = null,
                    n = null,
                    r = null,
                    a = null,
                    s = null,
                    o = null,
                    l = null,
                    c = null;
                return {
                    setTest: function(e) {
                        t || (e ? B(2960) : k(2960))
                    },
                    setMask: function(n) {
                        i === n || t || (e.stencilMask(n), i = n)
                    },
                    setFunc: function(t, i, s) {
                        n === t && r === i && a === s || (e.stencilFunc(t, i, s), n = t, r = i, a = s)
                    },
                    setOp: function(t, i, n) {
                        s === t && o === i && l === n || (e.stencilOp(t, i, n), s = t, o = i, l = n)
                    },
                    setLocked: function(e) {
                        t = e
                    },
                    setClear: function(t) {
                        c !== t && (e.clearStencil(t), c = t)
                    },
                    reset: function() {
                        t = !1, i = null, n = null, r = null, a = null, s = null, o = null, l = null, c = null
                    }
                }
            };
        let o = {},
            c = {},
            h = new WeakMap,
            u = [],
            d = null,
            p = !1,
            f = null,
            m = null,
            g = null,
            v = null,
            _ = null,
            x = null,
            y = null,
            M = !1,
            b = null,
            S = null,
            w = null,
            T = null,
            E = null;
        const A = e.getParameter(35661);
        let C = !1,
            L = 0;
        const P = e.getParameter(7938); - 1 !== P.indexOf("WebGL") ? (L = parseFloat(/^WebGL (\d)/.exec(P)[1]), C = L >= 1) : -1 !== P.indexOf("OpenGL ES") && (L = parseFloat(/^OpenGL ES (\d)/.exec(P)[1]), C = L >= 2);
        let R = null,
            D = {};
        const I = e.getParameter(3088),
            N = e.getParameter(2978),
            z = (new me).fromArray(I),
            O = (new me).fromArray(N);

        function U(t, i, n) {
            const r = new Uint8Array(4),
                a = e.createTexture();
            e.bindTexture(t, a), e.texParameteri(t, 10241, 9728), e.texParameteri(t, 10240, 9728);
            for (let t = 0; t < n; t++) e.texImage2D(i + t, 0, 6408, 1, 1, 0, 6408, 5121, r);
            return a
        }
        const F = {};

        function B(t) {
            !0 !== o[t] && (e.enable(t), o[t] = !0)
        }

        function k(t) {
            !1 !== o[t] && (e.disable(t), o[t] = !1)
        }
        F[3553] = U(3553, 3553, 1), F[34067] = U(34067, 34069, 6), r.setClear(0, 0, 0, 1), a.setClear(1), s.setClear(0), B(2929), a.setFunc(3), W(!1), j(1), B(2884), V(0);
        const H = {
            [l]: 32774,
            101: 32778,
            102: 32779
        };
        if (n) H[103] = 32775, H[104] = 32776;
        else {
            const e = t.get("EXT_blend_minmax");
            null !== e && (H[103] = e.MIN_EXT, H[104] = e.MAX_EXT)
        }
        const G = {
            200: 0,
            201: 1,
            202: 768,
            204: 770,
            210: 776,
            208: 774,
            206: 772,
            203: 769,
            205: 771,
            209: 775,
            207: 773
        };

        function V(t, i, n, r, a, s, o, c) {
            if (0 !== t) {
                if (!1 === p && (B(3042), p = !0), 5 === t) a = a || i, s = s || n, o = o || r, i === m && a === _ || (e.blendEquationSeparate(H[i], H[a]), m = i, _ = a), n === g && r === v && s === x && o === y || (e.blendFuncSeparate(G[n], G[r], G[s], G[o]), g = n, v = r, x = s, y = o), f = t, M = null;
                else if (t !== f || c !== M) {
                    if (m === l && _ === l || (e.blendEquation(32774), m = l, _ = l), c) switch (t) {
                        case 1:
                            e.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case 2:
                            e.blendFunc(1, 1);
                            break;
                        case 3:
                            e.blendFuncSeparate(0, 769, 0, 1);
                            break;
                        case 4:
                            e.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", t)
                    } else switch (t) {
                        case 1:
                            e.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case 2:
                            e.blendFunc(770, 1);
                            break;
                        case 3:
                            e.blendFuncSeparate(0, 769, 0, 1);
                            break;
                        case 4:
                            e.blendFunc(0, 768);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", t)
                    }
                    g = null, v = null, x = null, y = null, f = t, M = c
                }
            } else !0 === p && (k(3042), p = !1)
        }

        function W(t) {
            b !== t && (t ? e.frontFace(2304) : e.frontFace(2305), b = t)
        }

        function j(t) {
            0 !== t ? (B(2884), t !== S && (1 === t ? e.cullFace(1029) : 2 === t ? e.cullFace(1028) : e.cullFace(1032))) : k(2884), S = t
        }

        function q(t, i, n) {
            t ? (B(32823), T === i && E === n || (e.polygonOffset(i, n), T = i, E = n)) : k(32823)
        }

        function X(t) {
            void 0 === t && (t = 33984 + A - 1), R !== t && (e.activeTexture(t), R = t)
        }
        return {
            buffers: {
                color: r,
                depth: a,
                stencil: s
            },
            enable: B,
            disable: k,
            bindFramebuffer: function(t, i) {
                return c[t] !== i && (e.bindFramebuffer(t, i), c[t] = i, n && (36009 === t && (c[36160] = i), 36160 === t && (c[36009] = i)), !0)
            },
            drawBuffers: function(n, r) {
                let a = u,
                    s = !1;
                if (n)
                    if (a = h.get(r), void 0 === a && (a = [], h.set(r, a)), n.isWebGLMultipleRenderTargets) {
                        const e = n.texture;
                        if (a.length !== e.length || 36064 !== a[0]) {
                            for (let t = 0, i = e.length; t < i; t++) a[t] = 36064 + t;
                            a.length = e.length, s = !0
                        }
                    } else 36064 !== a[0] && (a[0] = 36064, s = !0);
                else 1029 !== a[0] && (a[0] = 1029, s = !0);
                s && (i.isWebGL2 ? e.drawBuffers(a) : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(a))
            },
            useProgram: function(t) {
                return d !== t && (e.useProgram(t), d = t, !0)
            },
            setBlending: V,
            setMaterial: function(e, t) {
                2 === e.side ? k(2884) : B(2884);
                let i = 1 === e.side;
                t && (i = !i), W(i), 1 === e.blending && !1 === e.transparent ? V(0) : V(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha), a.setFunc(e.depthFunc), a.setTest(e.depthTest), a.setMask(e.depthWrite), r.setMask(e.colorWrite);
                const n = e.stencilWrite;
                s.setTest(n), n && (s.setMask(e.stencilWriteMask), s.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask), s.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)), q(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits), !0 === e.alphaToCoverage ? B(32926) : k(32926)
            },
            setFlipSided: W,
            setCullFace: j,
            setLineWidth: function(t) {
                t !== w && (C && e.lineWidth(t), w = t)
            },
            setPolygonOffset: q,
            setScissorTest: function(e) {
                e ? B(3089) : k(3089)
            },
            activeTexture: X,
            bindTexture: function(t, i) {
                null === R && X();
                let n = D[R];
                void 0 === n && (n = {
                    type: void 0,
                    texture: void 0
                }, D[R] = n), n.type === t && n.texture === i || (e.bindTexture(t, i || F[t]), n.type = t, n.texture = i)
            },
            unbindTexture: function() {
                const t = D[R];
                void 0 !== t && void 0 !== t.type && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0)
            },
            compressedTexImage2D: function() {
                try {
                    e.compressedTexImage2D.apply(e, arguments)
                } catch (e) {
                    console.error("THREE.WebGLState:", e)
                }
            },
            texImage2D: function() {
                try {
                    e.texImage2D.apply(e, arguments)
                } catch (e) {
                    console.error("THREE.WebGLState:", e)
                }
            },
            texImage3D: function() {
                try {
                    e.texImage3D.apply(e, arguments)
                } catch (e) {
                    console.error("THREE.WebGLState:", e)
                }
            },
            texStorage2D: function() {
                try {
                    e.texStorage2D.apply(e, arguments)
                } catch (e) {
                    console.error("THREE.WebGLState:", e)
                }
            },
            texStorage3D: function() {
                try {
                    e.texStorage3D.apply(e, arguments)
                } catch (e) {
                    console.error("THREE.WebGLState:", e)
                }
            },
            texSubImage2D: function() {
                try {
                    e.texSubImage2D.apply(e, arguments)
                } catch (e) {
                    console.error("THREE.WebGLState:", e)
                }
            },
            texSubImage3D: function() {
                try {
                    e.texSubImage3D.apply(e, arguments)
                } catch (e) {
                    console.error("THREE.WebGLState:", e)
                }
            },
            compressedTexSubImage2D: function() {
                try {
                    e.compressedTexSubImage2D.apply(e, arguments)
                } catch (e) {
                    console.error("THREE.WebGLState:", e)
                }
            },
            scissor: function(t) {
                !1 === z.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), z.copy(t))
            },
            viewport: function(t) {
                !1 === O.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), O.copy(t))
            },
            reset: function() {
                e.disable(3042), e.disable(2884), e.disable(2929), e.disable(32823), e.disable(3089), e.disable(2960), e.disable(32926), e.blendEquation(32774), e.blendFunc(1, 0), e.blendFuncSeparate(1, 0, 1, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(513), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(519, 0, 4294967295), e.stencilOp(7680, 7680, 7680), e.clearStencil(0), e.cullFace(1029), e.frontFace(2305), e.polygonOffset(0, 0), e.activeTexture(33984), e.bindFramebuffer(36160, null), !0 === n && (e.bindFramebuffer(36009, null), e.bindFramebuffer(36008, null)), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), o = {}, R = null, D = {}, c = {}, h = new WeakMap, u = [], d = null, p = !1, f = null, m = null, g = null, v = null, _ = null, x = null, y = null, M = !1, b = null, S = null, w = null, T = null, E = null, z.set(0, 0, e.canvas.width, e.canvas.height), O.set(0, 0, e.canvas.width, e.canvas.height), r.reset(), a.reset(), s.reset()
            }
        }
    }

    function aa(e, t, i, n, r, a, s) {
        const o = r.isWebGL2,
            l = r.maxTextures,
            c = r.maxCubemapSize,
            h = r.maxTextureSize,
            u = r.maxSamples,
            d = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null,
            A = /OculusBrowser/g.test(navigator.userAgent),
            C = new WeakMap;
        let L;
        const P = new WeakMap;
        let I = !1;
        try {
            I = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
        } catch (e) {}

        function N(e, t) {
            return I ? new OffscreenCanvas(e, t) : K("canvas")
        }

        function z(e, t, i, n) {
            let r = 1;
            if ((e.width > n || e.height > n) && (r = n / Math.max(e.width, e.height)), r < 1 || !0 === t) {
                if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap) {
                    const n = t ? X : Math.floor,
                        a = n(r * e.width),
                        s = n(r * e.height);
                    void 0 === L && (L = N(a, s));
                    const o = i ? N(a, s) : L;
                    o.width = a, o.height = s;
                    return o.getContext("2d").drawImage(e, 0, 0, a, s), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + e.width + "x" + e.height + ") to (" + a + "x" + s + ")."), o
                }
                return "data" in e && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + e.width + "x" + e.height + ")."), e
            }
            return e
        }

        function O(e) {
            return q(e.width) && q(e.height)
        }

        function U(e, t) {
            return e.generateMipmaps && t && e.minFilter !== g && e.minFilter !== v
        }

        function B(t) {
            e.generateMipmap(t)
        }

        function k(i, n, r, a, s = !1) {
            if (!1 === o) return n;
            if (null !== i) {
                if (void 0 !== e[i]) return e[i];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + i + "'")
            }
            let l = n;
            return 6403 === n && (5126 === r && (l = 33326), 5131 === r && (l = 33325), 5121 === r && (l = 33321)), 33319 === n && (5126 === r && (l = 33328), 5131 === r && (l = 33327), 5121 === r && (l = 33323)), 6408 === n && (5126 === r && (l = 34836), 5131 === r && (l = 34842), 5121 === r && (l = a === D && !1 === s ? 35907 : 32856), 32819 === r && (l = 32854), 32820 === r && (l = 32855)), 33325 !== l && 33326 !== l && 33327 !== l && 33328 !== l && 34842 !== l && 34836 !== l || t.get("EXT_color_buffer_float"), l
        }

        function H(e, t, i) {
            return !0 === U(e, i) || e.isFramebufferTexture && e.minFilter !== g && e.minFilter !== v ? Math.log2(Math.max(t.width, t.height)) + 1 : void 0 !== e.mipmaps && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1
        }

        function G(e) {
            return e === g || 1004 === e || 1005 === e ? 9728 : 9729
        }

        function V(e) {
            const t = e.target;
            t.removeEventListener("dispose", V),
                function(e) {
                    const t = n.get(e);
                    if (void 0 === t.__webglInit) return;
                    const i = e.source,
                        r = P.get(i);
                    if (r) {
                        const n = r[t.__cacheKey];
                        n.usedTimes--, 0 === n.usedTimes && j(e), 0 === Object.keys(r).length && P.delete(i)
                    }
                    n.remove(e)
                }(t), t.isVideoTexture && C.delete(t)
        }

        function W(t) {
            const i = t.target;
            i.removeEventListener("dispose", W),
                function(t) {
                    const i = t.texture,
                        r = n.get(t),
                        a = n.get(i);
                    void 0 !== a.__webglTexture && (e.deleteTexture(a.__webglTexture), s.memory.textures--);
                    t.depthTexture && t.depthTexture.dispose();
                    if (t.isWebGLCubeRenderTarget)
                        for (let t = 0; t < 6; t++) e.deleteFramebuffer(r.__webglFramebuffer[t]), r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer[t]);
                    else {
                        if (e.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && e.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer)
                            for (let t = 0; t < r.__webglColorRenderbuffer.length; t++) r.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(r.__webglColorRenderbuffer[t]);
                        r.__webglDepthRenderbuffer && e.deleteRenderbuffer(r.__webglDepthRenderbuffer)
                    }
                    if (t.isWebGLMultipleRenderTargets)
                        for (let t = 0, r = i.length; t < r; t++) {
                            const r = n.get(i[t]);
                            r.__webglTexture && (e.deleteTexture(r.__webglTexture), s.memory.textures--), n.remove(i[t])
                        }
                    n.remove(i), n.remove(t)
                }(i)
        }

        function j(t) {
            const i = n.get(t);
            e.deleteTexture(i.__webglTexture);
            const r = t.source;
            delete P.get(r)[i.__cacheKey], s.memory.textures--
        }
        let Y = 0;

        function Z(e, t) {
            const r = n.get(e);
            if (e.isVideoTexture && function(e) {
                    const t = s.render.frame;
                    C.get(e) !== t && (C.set(e, t), e.update())
                }(e), !1 === e.isRenderTargetTexture && e.version > 0 && r.__version !== e.version) {
                const i = e.image;
                if (null === i) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
                else {
                    if (!1 !== i.complete) return void te(r, e, t);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                }
            }
            i.activeTexture(33984 + t), i.bindTexture(3553, r.__webglTexture)
        }
        const J = {
                [p]: 10497,
                [f]: 33071,
                [m]: 33648
            },
            Q = {
                [g]: 9728,
                1004: 9984,
                1005: 9986,
                [v]: 9729,
                1007: 9985,
                [_]: 9987
            };

        function $(i, a, s) {
            if (s ? (e.texParameteri(i, 10242, J[a.wrapS]), e.texParameteri(i, 10243, J[a.wrapT]), 32879 !== i && 35866 !== i || e.texParameteri(i, 32882, J[a.wrapR]), e.texParameteri(i, 10240, Q[a.magFilter]), e.texParameteri(i, 10241, Q[a.minFilter])) : (e.texParameteri(i, 10242, 33071), e.texParameteri(i, 10243, 33071), 32879 !== i && 35866 !== i || e.texParameteri(i, 32882, 33071), a.wrapS === f && a.wrapT === f || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(i, 10240, G(a.magFilter)), e.texParameteri(i, 10241, G(a.minFilter)), a.minFilter !== g && a.minFilter !== v && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === t.has("EXT_texture_filter_anisotropic")) {
                const s = t.get("EXT_texture_filter_anisotropic");
                if (a.type === M && !1 === t.has("OES_texture_float_linear")) return;
                if (!1 === o && a.type === b && !1 === t.has("OES_texture_half_float_linear")) return;
                (a.anisotropy > 1 || n.get(a).__currentAnisotropy) && (e.texParameterf(i, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), n.get(a).__currentAnisotropy = a.anisotropy)
            }
        }

        function ee(t, i) {
            let n = !1;
            void 0 === t.__webglInit && (t.__webglInit = !0, i.addEventListener("dispose", V));
            const r = i.source;
            let a = P.get(r);
            void 0 === a && (a = {}, P.set(r, a));
            const o = function(e) {
                const t = [];
                return t.push(e.wrapS), t.push(e.wrapT), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.encoding), t.join()
            }(i);
            if (o !== t.__cacheKey) {
                void 0 === a[o] && (a[o] = {
                    texture: e.createTexture(),
                    usedTimes: 0
                }, s.memory.textures++, n = !0), a[o].usedTimes++;
                const r = a[t.__cacheKey];
                void 0 !== r && (a[t.__cacheKey].usedTimes--, 0 === r.usedTimes && j(i)), t.__cacheKey = o, t.__webglTexture = a[o].texture
            }
            return n
        }

        function te(t, n, r) {
            let s = 3553;
            n.isDataArrayTexture && (s = 35866), n.isData3DTexture && (s = 32879);
            const l = ee(t, n),
                c = n.source;
            if (i.activeTexture(33984 + r), i.bindTexture(s, t.__webglTexture), c.version !== c.__currentVersion || !0 === l) {
                e.pixelStorei(37440, n.flipY), e.pixelStorei(37441, n.premultiplyAlpha), e.pixelStorei(3317, n.unpackAlignment), e.pixelStorei(37443, 0);
                const t = function(e) {
                    return !o && (e.wrapS !== f || e.wrapT !== f || e.minFilter !== g && e.minFilter !== v)
                }(n) && !1 === O(n.image);
                let r = z(n.image, t, !1, h);
                r = oe(n, r);
                const u = O(r) || o,
                    d = a.convert(n.format, n.encoding);
                let p, m = a.convert(n.type),
                    _ = k(n.internalFormat, d, m, n.encoding, n.isVideoTexture);
                $(s, n, u);
                const x = n.mipmaps,
                    b = o && !0 !== n.isVideoTexture,
                    A = void 0 === c.__currentVersion || !0 === l,
                    C = H(n, r, u);
                if (n.isDepthTexture) _ = 6402, o ? _ = n.type === M ? 36012 : n.type === y ? 33190 : n.type === S ? 35056 : 33189 : n.type === M && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), n.format === T && 6402 === _ && 1012 !== n.type && n.type !== y && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), n.type = y, m = a.convert(n.type)), n.format === E && 6402 === _ && (_ = 34041, n.type !== S && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), n.type = S, m = a.convert(n.type))), A && (b ? i.texStorage2D(3553, 1, _, r.width, r.height) : i.texImage2D(3553, 0, _, r.width, r.height, 0, d, m, null));
                else if (n.isDataTexture)
                    if (x.length > 0 && u) {
                        b && A && i.texStorage2D(3553, C, _, x[0].width, x[0].height);
                        for (let e = 0, t = x.length; e < t; e++) p = x[e], b ? i.texSubImage2D(3553, e, 0, 0, p.width, p.height, d, m, p.data) : i.texImage2D(3553, e, _, p.width, p.height, 0, d, m, p.data);
                        n.generateMipmaps = !1
                    } else b ? (A && i.texStorage2D(3553, C, _, r.width, r.height), i.texSubImage2D(3553, 0, 0, 0, r.width, r.height, d, m, r.data)) : i.texImage2D(3553, 0, _, r.width, r.height, 0, d, m, r.data);
                else if (n.isCompressedTexture) {
                    b && A && i.texStorage2D(3553, C, _, x[0].width, x[0].height);
                    for (let e = 0, t = x.length; e < t; e++) p = x[e], n.format !== w ? null !== d ? b ? i.compressedTexSubImage2D(3553, e, 0, 0, p.width, p.height, d, p.data) : i.compressedTexImage2D(3553, e, _, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : b ? i.texSubImage2D(3553, e, 0, 0, p.width, p.height, d, m, p.data) : i.texImage2D(3553, e, _, p.width, p.height, 0, d, m, p.data)
                } else if (n.isDataArrayTexture) b ? (A && i.texStorage3D(35866, C, _, r.width, r.height, r.depth), i.texSubImage3D(35866, 0, 0, 0, 0, r.width, r.height, r.depth, d, m, r.data)) : i.texImage3D(35866, 0, _, r.width, r.height, r.depth, 0, d, m, r.data);
                else if (n.isData3DTexture) b ? (A && i.texStorage3D(32879, C, _, r.width, r.height, r.depth), i.texSubImage3D(32879, 0, 0, 0, 0, r.width, r.height, r.depth, d, m, r.data)) : i.texImage3D(32879, 0, _, r.width, r.height, r.depth, 0, d, m, r.data);
                else if (n.isFramebufferTexture) {
                    if (A)
                        if (b) i.texStorage2D(3553, C, _, r.width, r.height);
                        else {
                            let e = r.width,
                                t = r.height;
                            for (let n = 0; n < C; n++) i.texImage2D(3553, n, _, e, t, 0, d, m, null), e >>= 1, t >>= 1
                        }
                } else if (x.length > 0 && u) {
                    b && A && i.texStorage2D(3553, C, _, x[0].width, x[0].height);
                    for (let e = 0, t = x.length; e < t; e++) p = x[e], b ? i.texSubImage2D(3553, e, 0, 0, d, m, p) : i.texImage2D(3553, e, _, d, m, p);
                    n.generateMipmaps = !1
                } else b ? (A && i.texStorage2D(3553, C, _, r.width, r.height), i.texSubImage2D(3553, 0, 0, 0, d, m, r)) : i.texImage2D(3553, 0, _, d, m, r);
                U(n, u) && B(s), c.__currentVersion = c.version, n.onUpdate && n.onUpdate(n)
            }
            t.__version = n.version
        }

        function ie(t, r, s, o, l) {
            const c = a.convert(s.format, s.encoding),
                h = a.convert(s.type),
                u = k(s.internalFormat, c, h, s.encoding);
            n.get(r).__hasExternalTextures || (32879 === l || 35866 === l ? i.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null) : i.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null)), i.bindFramebuffer(36160, t), se(r) ? d.framebufferTexture2DMultisampleEXT(36160, o, l, n.get(s).__webglTexture, 0, ae(r)) : e.framebufferTexture2D(36160, o, l, n.get(s).__webglTexture, 0), i.bindFramebuffer(36160, null)
        }

        function ne(t, i, n) {
            if (e.bindRenderbuffer(36161, t), i.depthBuffer && !i.stencilBuffer) {
                let r = 33189;
                if (n || se(i)) {
                    const t = i.depthTexture;
                    t && t.isDepthTexture && (t.type === M ? r = 36012 : t.type === y && (r = 33190));
                    const n = ae(i);
                    se(i) ? d.renderbufferStorageMultisampleEXT(36161, n, r, i.width, i.height) : e.renderbufferStorageMultisample(36161, n, r, i.width, i.height)
                } else e.renderbufferStorage(36161, r, i.width, i.height);
                e.framebufferRenderbuffer(36160, 36096, 36161, t)
            } else if (i.depthBuffer && i.stencilBuffer) {
                const r = ae(i);
                n && !1 === se(i) ? e.renderbufferStorageMultisample(36161, r, 35056, i.width, i.height) : se(i) ? d.renderbufferStorageMultisampleEXT(36161, r, 35056, i.width, i.height) : e.renderbufferStorage(36161, 34041, i.width, i.height), e.framebufferRenderbuffer(36160, 33306, 36161, t)
            } else {
                const t = !0 === i.isWebGLMultipleRenderTargets ? i.texture : [i.texture];
                for (let r = 0; r < t.length; r++) {
                    const s = t[r],
                        o = a.convert(s.format, s.encoding),
                        l = a.convert(s.type),
                        c = k(s.internalFormat, o, l, s.encoding),
                        h = ae(i);
                    n && !1 === se(i) ? e.renderbufferStorageMultisample(36161, h, c, i.width, i.height) : se(i) ? d.renderbufferStorageMultisampleEXT(36161, h, c, i.width, i.height) : e.renderbufferStorage(36161, c, i.width, i.height)
                }
            }
            e.bindRenderbuffer(36161, null)
        }

        function re(t) {
            const r = n.get(t),
                a = !0 === t.isWebGLCubeRenderTarget;
            if (t.depthTexture && !r.__autoAllocateDepthBuffer) {
                if (a) throw new Error("target.depthTexture not supported in Cube render targets");
                ! function(t, r) {
                    if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                    if (i.bindFramebuffer(36160, t), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    n.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), Z(r.depthTexture, 0);
                    const a = n.get(r.depthTexture).__webglTexture,
                        s = ae(r);
                    if (r.depthTexture.format === T) se(r) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, a, 0, s) : e.framebufferTexture2D(36160, 36096, 3553, a, 0);
                    else {
                        if (r.depthTexture.format !== E) throw new Error("Unknown depthTexture format");
                        se(r) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, a, 0, s) : e.framebufferTexture2D(36160, 33306, 3553, a, 0)
                    }
                }(r.__webglFramebuffer, t)
            } else if (a) {
                r.__webglDepthbuffer = [];
                for (let n = 0; n < 6; n++) i.bindFramebuffer(36160, r.__webglFramebuffer[n]), r.__webglDepthbuffer[n] = e.createRenderbuffer(), ne(r.__webglDepthbuffer[n], t, !1)
            } else i.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = e.createRenderbuffer(), ne(r.__webglDepthbuffer, t, !1);
            i.bindFramebuffer(36160, null)
        }

        function ae(e) {
            return Math.min(u, e.samples)
        }

        function se(e) {
            const i = n.get(e);
            return o && e.samples > 0 && !0 === t.has("WEBGL_multisampled_render_to_texture") && !1 !== i.__useRenderToTexture
        }

        function oe(e, i) {
            const n = e.encoding,
                r = e.format,
                a = e.type;
            return !0 === e.isCompressedTexture || !0 === e.isVideoTexture || e.format === F || n !== R && (n === D ? !1 === o ? !0 === t.has("EXT_sRGB") && r === w ? (e.format = F, e.minFilter = v, e.generateMipmaps = !1) : i = he.sRGBToLinear(i) : r === w && a === x || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", n)), i
        }
        this.allocateTextureUnit = function() {
            const e = Y;
            return e >= l && console.warn("THREE.WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + l), Y += 1, e
        }, this.resetTextureUnits = function() {
            Y = 0
        }, this.setTexture2D = Z, this.setTexture2DArray = function(e, t) {
            const r = n.get(e);
            e.version > 0 && r.__version !== e.version ? te(r, e, t) : (i.activeTexture(33984 + t), i.bindTexture(35866, r.__webglTexture))
        }, this.setTexture3D = function(e, t) {
            const r = n.get(e);
            e.version > 0 && r.__version !== e.version ? te(r, e, t) : (i.activeTexture(33984 + t), i.bindTexture(32879, r.__webglTexture))
        }, this.setTextureCube = function(t, r) {
            const s = n.get(t);
            t.version > 0 && s.__version !== t.version ? function(t, n, r) {
                if (6 !== n.image.length) return;
                const s = ee(t, n),
                    l = n.source;
                if (i.activeTexture(33984 + r), i.bindTexture(34067, t.__webglTexture), l.version !== l.__currentVersion || !0 === s) {
                    e.pixelStorei(37440, n.flipY), e.pixelStorei(37441, n.premultiplyAlpha), e.pixelStorei(3317, n.unpackAlignment), e.pixelStorei(37443, 0);
                    const t = n.isCompressedTexture || n.image[0].isCompressedTexture,
                        r = n.image[0] && n.image[0].isDataTexture,
                        h = [];
                    for (let e = 0; e < 6; e++) h[e] = t || r ? r ? n.image[e].image : n.image[e] : z(n.image[e], !1, !0, c), h[e] = oe(n, h[e]);
                    const u = h[0],
                        d = O(u) || o,
                        p = a.convert(n.format, n.encoding),
                        f = a.convert(n.type),
                        m = k(n.internalFormat, p, f, n.encoding),
                        g = o && !0 !== n.isVideoTexture,
                        v = void 0 === l.__currentVersion || !0 === s;
                    let _, x = H(n, u, d);
                    if ($(34067, n, d), t) {
                        g && v && i.texStorage2D(34067, x, m, u.width, u.height);
                        for (let e = 0; e < 6; e++) {
                            _ = h[e].mipmaps;
                            for (let t = 0; t < _.length; t++) {
                                const r = _[t];
                                n.format !== w ? null !== p ? g ? i.compressedTexSubImage2D(34069 + e, t, 0, 0, r.width, r.height, p, r.data) : i.compressedTexImage2D(34069 + e, t, m, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : g ? i.texSubImage2D(34069 + e, t, 0, 0, r.width, r.height, p, f, r.data) : i.texImage2D(34069 + e, t, m, r.width, r.height, 0, p, f, r.data)
                            }
                        }
                    } else {
                        _ = n.mipmaps, g && v && (_.length > 0 && x++, i.texStorage2D(34067, x, m, h[0].width, h[0].height));
                        for (let e = 0; e < 6; e++)
                            if (r) {
                                g ? i.texSubImage2D(34069 + e, 0, 0, 0, h[e].width, h[e].height, p, f, h[e].data) : i.texImage2D(34069 + e, 0, m, h[e].width, h[e].height, 0, p, f, h[e].data);
                                for (let t = 0; t < _.length; t++) {
                                    const n = _[t].image[e].image;
                                    g ? i.texSubImage2D(34069 + e, t + 1, 0, 0, n.width, n.height, p, f, n.data) : i.texImage2D(34069 + e, t + 1, m, n.width, n.height, 0, p, f, n.data)
                                }
                            } else {
                                g ? i.texSubImage2D(34069 + e, 0, 0, 0, p, f, h[e]) : i.texImage2D(34069 + e, 0, m, p, f, h[e]);
                                for (let t = 0; t < _.length; t++) {
                                    const n = _[t];
                                    g ? i.texSubImage2D(34069 + e, t + 1, 0, 0, p, f, n.image[e]) : i.texImage2D(34069 + e, t + 1, m, p, f, n.image[e])
                                }
                            }
                    }
                    U(n, d) && B(34067), l.__currentVersion = l.version, n.onUpdate && n.onUpdate(n)
                }
                t.__version = n.version
            }(s, t, r) : (i.activeTexture(33984 + r), i.bindTexture(34067, s.__webglTexture))
        }, this.rebindTextures = function(e, t, i) {
            const r = n.get(e);
            void 0 !== t && ie(r.__webglFramebuffer, e, e.texture, 36064, 3553), void 0 !== i && re(e)
        }, this.setupRenderTarget = function(t) {
            const l = t.texture,
                c = n.get(t),
                h = n.get(l);
            t.addEventListener("dispose", W), !0 !== t.isWebGLMultipleRenderTargets && (void 0 === h.__webglTexture && (h.__webglTexture = e.createTexture()), h.__version = l.version, s.memory.textures++);
            const u = !0 === t.isWebGLCubeRenderTarget,
                d = !0 === t.isWebGLMultipleRenderTargets,
                p = O(t) || o;
            if (u) {
                c.__webglFramebuffer = [];
                for (let t = 0; t < 6; t++) c.__webglFramebuffer[t] = e.createFramebuffer()
            } else {
                if (c.__webglFramebuffer = e.createFramebuffer(), d)
                    if (r.drawBuffers) {
                        const i = t.texture;
                        for (let t = 0, r = i.length; t < r; t++) {
                            const r = n.get(i[t]);
                            void 0 === r.__webglTexture && (r.__webglTexture = e.createTexture(), s.memory.textures++)
                        }
                    } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
                if (o && t.samples > 0 && !1 === se(t)) {
                    const n = d ? l : [l];
                    c.__webglMultisampledFramebuffer = e.createFramebuffer(), c.__webglColorRenderbuffer = [], i.bindFramebuffer(36160, c.__webglMultisampledFramebuffer);
                    for (let i = 0; i < n.length; i++) {
                        const r = n[i];
                        c.__webglColorRenderbuffer[i] = e.createRenderbuffer(), e.bindRenderbuffer(36161, c.__webglColorRenderbuffer[i]);
                        const s = a.convert(r.format, r.encoding),
                            o = a.convert(r.type),
                            l = k(r.internalFormat, s, o, r.encoding),
                            h = ae(t);
                        e.renderbufferStorageMultisample(36161, h, l, t.width, t.height), e.framebufferRenderbuffer(36160, 36064 + i, 36161, c.__webglColorRenderbuffer[i])
                    }
                    e.bindRenderbuffer(36161, null), t.depthBuffer && (c.__webglDepthRenderbuffer = e.createRenderbuffer(), ne(c.__webglDepthRenderbuffer, t, !0)), i.bindFramebuffer(36160, null)
                }
            }
            if (u) {
                i.bindTexture(34067, h.__webglTexture), $(34067, l, p);
                for (let e = 0; e < 6; e++) ie(c.__webglFramebuffer[e], t, l, 36064, 34069 + e);
                U(l, p) && B(34067), i.unbindTexture()
            } else if (d) {
                const e = t.texture;
                for (let r = 0, a = e.length; r < a; r++) {
                    const a = e[r],
                        s = n.get(a);
                    i.bindTexture(3553, s.__webglTexture), $(3553, a, p), ie(c.__webglFramebuffer, t, a, 36064 + r, 3553), U(a, p) && B(3553)
                }
                i.unbindTexture()
            } else {
                let e = 3553;
                (t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (o ? e = t.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), i.bindTexture(e, h.__webglTexture), $(e, l, p), ie(c.__webglFramebuffer, t, l, 36064, e), U(l, p) && B(e), i.unbindTexture()
            }
            t.depthBuffer && re(t)
        }, this.updateRenderTargetMipmap = function(e) {
            const t = O(e) || o,
                r = !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture];
            for (let a = 0, s = r.length; a < s; a++) {
                const s = r[a];
                if (U(s, t)) {
                    const t = e.isWebGLCubeRenderTarget ? 34067 : 3553,
                        r = n.get(s).__webglTexture;
                    i.bindTexture(t, r), B(t), i.unbindTexture()
                }
            }
        }, this.updateMultisampleRenderTarget = function(t) {
            if (o && t.samples > 0 && !1 === se(t)) {
                const r = t.isWebGLMultipleRenderTargets ? t.texture : [t.texture],
                    a = t.width,
                    s = t.height;
                let o = 16384;
                const l = [],
                    c = t.stencilBuffer ? 33306 : 36096,
                    h = n.get(t),
                    u = !0 === t.isWebGLMultipleRenderTargets;
                if (u)
                    for (let t = 0; t < r.length; t++) i.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064 + t, 36161, null), i.bindFramebuffer(36160, h.__webglFramebuffer), e.framebufferTexture2D(36009, 36064 + t, 3553, null, 0);
                i.bindFramebuffer(36008, h.__webglMultisampledFramebuffer), i.bindFramebuffer(36009, h.__webglFramebuffer);
                for (let i = 0; i < r.length; i++) {
                    l.push(36064 + i), t.depthBuffer && l.push(c);
                    const d = void 0 !== h.__ignoreDepthValues && h.__ignoreDepthValues;
                    if (!1 === d && (t.depthBuffer && (o |= 256), t.stencilBuffer && (o |= 1024)), u && e.framebufferRenderbuffer(36008, 36064, 36161, h.__webglColorRenderbuffer[i]), !0 === d && (e.invalidateFramebuffer(36008, [c]), e.invalidateFramebuffer(36009, [c])), u) {
                        const t = n.get(r[i]).__webglTexture;
                        e.framebufferTexture2D(36009, 36064, 3553, t, 0)
                    }
                    e.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, 9728), A && e.invalidateFramebuffer(36008, l)
                }
                if (i.bindFramebuffer(36008, null), i.bindFramebuffer(36009, null), u)
                    for (let t = 0; t < r.length; t++) {
                        i.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064 + t, 36161, h.__webglColorRenderbuffer[t]);
                        const a = n.get(r[t]).__webglTexture;
                        i.bindFramebuffer(36160, h.__webglFramebuffer), e.framebufferTexture2D(36009, 36064 + t, 3553, a, 0)
                    }
                i.bindFramebuffer(36009, h.__webglMultisampledFramebuffer)
            }
        }, this.setupDepthRenderbuffer = re, this.setupFrameBufferTexture = ie, this.useMultisampledRTT = se
    }

    function sa(e, t, i) {
        const n = i.isWebGL2;
        return {
            convert: function(i, r = null) {
                let a;
                if (i === x) return 5121;
                if (1017 === i) return 32819;
                if (1018 === i) return 32820;
                if (1010 === i) return 5120;
                if (1011 === i) return 5122;
                if (1012 === i) return 5123;
                if (1013 === i) return 5124;
                if (i === y) return 5125;
                if (i === M) return 5126;
                if (i === b) return n ? 5131 : (a = t.get("OES_texture_half_float"), null !== a ? a.HALF_FLOAT_OES : null);
                if (1021 === i) return 6406;
                if (i === w) return 6408;
                if (1024 === i) return 6409;
                if (1025 === i) return 6410;
                if (i === T) return 6402;
                if (i === E) return 34041;
                if (1028 === i) return 6403;
                if (1022 === i) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
                if (i === F) return a = t.get("EXT_sRGB"), null !== a ? a.SRGB_ALPHA_EXT : null;
                if (1029 === i) return 36244;
                if (1030 === i) return 33319;
                if (1031 === i) return 33320;
                if (1033 === i) return 36249;
                if (i === A || i === C || i === L || i === P)
                    if (r === D) {
                        if (a = t.get("WEBGL_compressed_texture_s3tc_srgb"), null === a) return null;
                        if (i === A) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                        if (i === C) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                        if (i === L) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                        if (i === P) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                    } else {
                        if (a = t.get("WEBGL_compressed_texture_s3tc"), null === a) return null;
                        if (i === A) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        if (i === C) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                        if (i === L) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                        if (i === P) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT
                    } if (35840 === i || 35841 === i || 35842 === i || 35843 === i) {
                    if (a = t.get("WEBGL_compressed_texture_pvrtc"), null === a) return null;
                    if (35840 === i) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (35841 === i) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (35842 === i) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (35843 === i) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
                if (36196 === i) return a = t.get("WEBGL_compressed_texture_etc1"), null !== a ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
                if (37492 === i || 37496 === i) {
                    if (a = t.get("WEBGL_compressed_texture_etc"), null === a) return null;
                    if (37492 === i) return r === D ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
                    if (37496 === i) return r === D ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC
                }
                if (37808 === i || 37809 === i || 37810 === i || 37811 === i || 37812 === i || 37813 === i || 37814 === i || 37815 === i || 37816 === i || 37817 === i || 37818 === i || 37819 === i || 37820 === i || 37821 === i) {
                    if (a = t.get("WEBGL_compressed_texture_astc"), null === a) return null;
                    if (37808 === i) return r === D ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
                    if (37809 === i) return r === D ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
                    if (37810 === i) return r === D ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
                    if (37811 === i) return r === D ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
                    if (37812 === i) return r === D ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
                    if (37813 === i) return r === D ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
                    if (37814 === i) return r === D ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
                    if (37815 === i) return r === D ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
                    if (37816 === i) return r === D ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
                    if (37817 === i) return r === D ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
                    if (37818 === i) return r === D ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
                    if (37819 === i) return r === D ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
                    if (37820 === i) return r === D ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
                    if (37821 === i) return r === D ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR
                }
                if (36492 === i) {
                    if (a = t.get("EXT_texture_compression_bptc"), null === a) return null;
                    if (36492 === i) return r === D ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT
                }
                return i === S ? n ? 34042 : (a = t.get("WEBGL_depth_texture"), null !== a ? a.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== e[i] ? e[i] : null
            }
        }
    }
    class oa extends bi {
        constructor(e = []) {
            super(), this.isArrayCamera = !0, this.cameras = e
        }
    }
    class la extends bt {
        constructor() {
            super(), this.isGroup = !0, this.type = "Group"
        }
    }
    const ca = {
        type: "move"
    };
    class ha {
        constructor() {
            this._targetRay = null, this._grip = null, this._hand = null
        }
        getHandSpace() {
            return null === this._hand && (this._hand = new la, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
                pinching: !1
            }), this._hand
        }
        getTargetRaySpace() {
            return null === this._targetRay && (this._targetRay = new la, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new ye, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new ye), this._targetRay
        }
        getGripSpace() {
            return null === this._grip && (this._grip = new la, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new ye, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new ye), this._grip
        }
        dispatchEvent(e) {
            return null !== this._targetRay && this._targetRay.dispatchEvent(e), null !== this._grip && this._grip.dispatchEvent(e), null !== this._hand && this._hand.dispatchEvent(e), this
        }
        disconnect(e) {
            return this.dispatchEvent({
                type: "disconnected",
                data: e
            }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this
        }
        update(e, t, i) {
            let n = null,
                r = null,
                a = null;
            const s = this._targetRay,
                o = this._grip,
                l = this._hand;
            if (e && "visible-blurred" !== t.session.visibilityState) {
                if (l && e.hand) {
                    a = !0;
                    for (const n of e.hand.values()) {
                        const e = t.getJointPose(n, i);
                        if (void 0 === l.joints[n.jointName]) {
                            const e = new la;
                            e.matrixAutoUpdate = !1, e.visible = !1, l.joints[n.jointName] = e, l.add(e)
                        }
                        const r = l.joints[n.jointName];
                        null !== e && (r.matrix.fromArray(e.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = e.radius), r.visible = null !== e
                    }
                    const n = l.joints["index-finger-tip"],
                        r = l.joints["thumb-tip"],
                        s = n.position.distanceTo(r.position),
                        o = .02,
                        c = .005;
                    l.inputState.pinching && s > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({
                        type: "pinchend",
                        handedness: e.handedness,
                        target: this
                    })) : !l.inputState.pinching && s <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({
                        type: "pinchstart",
                        handedness: e.handedness,
                        target: this
                    }))
                } else null !== o && e.gripSpace && (r = t.getPose(e.gripSpace, i), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
                null !== s && (n = t.getPose(e.targetRaySpace, i), null === n && null !== r && (n = r), null !== n && (s.matrix.fromArray(n.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), n.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(n.linearVelocity)) : s.hasLinearVelocity = !1, n.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(n.angularVelocity)) : s.hasAngularVelocity = !1, this.dispatchEvent(ca)))
            }
            return null !== s && (s.visible = null !== n), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== a), this
        }
    }
    class ua extends fe {
        constructor(e, t, i, n, r, a, s, o, l, c) {
            if ((c = void 0 !== c ? c : T) !== T && c !== E) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            void 0 === i && c === T && (i = y), void 0 === i && c === E && (i = S), super(null, n, r, a, s, o, c, i, l), this.isDepthTexture = !0, this.image = {
                width: e,
                height: t
            }, this.magFilter = void 0 !== s ? s : g, this.minFilter = void 0 !== o ? o : g, this.flipY = !1, this.generateMipmaps = !1
        }
    }
    class da extends B {
        constructor(e, t) {
            super();
            const i = this;
            let n = null,
                r = 1,
                a = null,
                s = "local-floor",
                o = null,
                l = null,
                c = null,
                h = null,
                u = null,
                d = null;
            const p = t.getContextAttributes();
            let f = null,
                m = null;
            const g = [],
                v = [],
                _ = new bi;
            _.layers.enable(1), _.viewport = new me;
            const M = new bi;
            M.layers.enable(2), M.viewport = new me;
            const b = [_, M],
                A = new oa;
            A.layers.enable(1), A.layers.enable(2);
            let C = null,
                L = null;

            function P(e) {
                const t = v.indexOf(e.inputSource);
                if (-1 === t) return;
                const i = g[t];
                void 0 !== i && i.dispatchEvent({
                    type: e.type,
                    data: e.inputSource
                })
            }

            function R() {
                n.removeEventListener("select", P), n.removeEventListener("selectstart", P), n.removeEventListener("selectend", P), n.removeEventListener("squeeze", P), n.removeEventListener("squeezestart", P), n.removeEventListener("squeezeend", P), n.removeEventListener("end", R), n.removeEventListener("inputsourceschange", D);
                for (let e = 0; e < g.length; e++) {
                    const t = v[e];
                    null !== t && (v[e] = null, g[e].disconnect(t))
                }
                C = null, L = null, e.setRenderTarget(f), u = null, h = null, c = null, n = null, m = null, U.stop(), i.isPresenting = !1, i.dispatchEvent({
                    type: "sessionend"
                })
            }

            function D(e) {
                for (let t = 0; t < e.removed.length; t++) {
                    const i = e.removed[t],
                        n = v.indexOf(i);
                    n >= 0 && (v[n] = null, g[n].dispatchEvent({
                        type: "disconnected",
                        data: i
                    }))
                }
                for (let t = 0; t < e.added.length; t++) {
                    const i = e.added[t];
                    let n = v.indexOf(i);
                    if (-1 === n) {
                        for (let e = 0; e < g.length; e++) {
                            if (e >= v.length) {
                                v.push(i), n = e;
                                break
                            }
                            if (null === v[e]) {
                                v[e] = i, n = e;
                                break
                            }
                        }
                        if (-1 === n) break
                    }
                    const r = g[n];
                    r && r.dispatchEvent({
                        type: "connected",
                        data: i
                    })
                }
            }
            this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(e) {
                let t = g[e];
                return void 0 === t && (t = new ha, g[e] = t), t.getTargetRaySpace()
            }, this.getControllerGrip = function(e) {
                let t = g[e];
                return void 0 === t && (t = new ha, g[e] = t), t.getGripSpace()
            }, this.getHand = function(e) {
                let t = g[e];
                return void 0 === t && (t = new ha, g[e] = t), t.getHandSpace()
            }, this.setFramebufferScaleFactor = function(e) {
                r = e, !0 === i.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
            }, this.setReferenceSpaceType = function(e) {
                s = e, !0 === i.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
            }, this.getReferenceSpace = function() {
                return o || a
            }, this.setReferenceSpace = function(e) {
                o = e
            }, this.getBaseLayer = function() {
                return null !== h ? h : u
            }, this.getBinding = function() {
                return c
            }, this.getFrame = function() {
                return d
            }, this.getSession = function() {
                return n
            }, this.setSession = async function(l) {
                if (n = l, null !== n) {
                    if (f = e.getRenderTarget(), n.addEventListener("select", P), n.addEventListener("selectstart", P), n.addEventListener("selectend", P), n.addEventListener("squeeze", P), n.addEventListener("squeezestart", P), n.addEventListener("squeezeend", P), n.addEventListener("end", R), n.addEventListener("inputsourceschange", D), !0 !== p.xrCompatible && await t.makeXRCompatible(), void 0 === n.renderState.layers || !1 === e.capabilities.isWebGL2) {
                        const i = {
                            antialias: void 0 !== n.renderState.layers || p.antialias,
                            alpha: p.alpha,
                            depth: p.depth,
                            stencil: p.stencil,
                            framebufferScaleFactor: r
                        };
                        u = new XRWebGLLayer(n, t, i), n.updateRenderState({
                            baseLayer: u
                        }), m = new ge(u.framebufferWidth, u.framebufferHeight, {
                            format: w,
                            type: x,
                            encoding: e.outputEncoding
                        })
                    } else {
                        let i = null,
                            a = null,
                            s = null;
                        p.depth && (s = p.stencil ? 35056 : 33190, i = p.stencil ? E : T, a = p.stencil ? S : y);
                        const o = {
                            colorFormat: 32856,
                            depthFormat: s,
                            scaleFactor: r
                        };
                        c = new XRWebGLBinding(n, t), h = c.createProjectionLayer(o), n.updateRenderState({
                            layers: [h]
                        }), m = new ge(h.textureWidth, h.textureHeight, {
                            format: w,
                            type: x,
                            depthTexture: new ua(h.textureWidth, h.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, i),
                            stencilBuffer: p.stencil,
                            encoding: e.outputEncoding,
                            samples: p.antialias ? 4 : 0
                        });
                        e.properties.get(m).__ignoreDepthValues = h.ignoreDepthValues
                    }
                    m.isXRRenderTarget = !0, this.setFoveation(1), o = null, a = await n.requestReferenceSpace(s), U.setContext(n), U.start(), i.isPresenting = !0, i.dispatchEvent({
                        type: "sessionstart"
                    })
                }
            };
            const I = new ye,
                N = new ye;

            function z(e, t) {
                null === t ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert()
            }
            this.updateCamera = function(e) {
                if (null === n) return;
                A.near = M.near = _.near = e.near, A.far = M.far = _.far = e.far, C === A.near && L === A.far || (n.updateRenderState({
                    depthNear: A.near,
                    depthFar: A.far
                }), C = A.near, L = A.far);
                const t = e.parent,
                    i = A.cameras;
                z(A, t);
                for (let e = 0; e < i.length; e++) z(i[e], t);
                A.matrixWorld.decompose(A.position, A.quaternion, A.scale), e.position.copy(A.position), e.quaternion.copy(A.quaternion), e.scale.copy(A.scale), e.matrix.copy(A.matrix), e.matrixWorld.copy(A.matrixWorld);
                const r = e.children;
                for (let e = 0, t = r.length; e < t; e++) r[e].updateMatrixWorld(!0);
                2 === i.length ? function(e, t, i) {
                    I.setFromMatrixPosition(t.matrixWorld), N.setFromMatrixPosition(i.matrixWorld);
                    const n = I.distanceTo(N),
                        r = t.projectionMatrix.elements,
                        a = i.projectionMatrix.elements,
                        s = r[14] / (r[10] - 1),
                        o = r[14] / (r[10] + 1),
                        l = (r[9] + 1) / r[5],
                        c = (r[9] - 1) / r[5],
                        h = (r[8] - 1) / r[0],
                        u = (a[8] + 1) / a[0],
                        d = s * h,
                        p = s * u,
                        f = n / (-h + u),
                        m = f * -h;
                    t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(m), e.translateZ(f), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert();
                    const g = s + f,
                        v = o + f,
                        _ = d - m,
                        x = p + (n - m),
                        y = l * o / v * g,
                        M = c * o / v * g;
                    e.projectionMatrix.makePerspective(_, x, y, M, g, v)
                }(A, _, M) : A.projectionMatrix.copy(_.projectionMatrix)
            }, this.getCamera = function() {
                return A
            }, this.getFoveation = function() {
                return null !== h ? h.fixedFoveation : null !== u ? u.fixedFoveation : void 0
            }, this.setFoveation = function(e) {
                null !== h && (h.fixedFoveation = e), null !== u && void 0 !== u.fixedFoveation && (u.fixedFoveation = e)
            };
            let O = null;
            const U = new Ni;
            U.setAnimationLoop((function(t, i) {
                if (l = i.getViewerPose(o || a), d = i, null !== l) {
                    const t = l.views;
                    null !== u && (e.setRenderTargetFramebuffer(m, u.framebuffer), e.setRenderTarget(m));
                    let i = !1;
                    t.length !== A.cameras.length && (A.cameras.length = 0, i = !0);
                    for (let n = 0; n < t.length; n++) {
                        const r = t[n];
                        let a = null;
                        if (null !== u) a = u.getViewport(r);
                        else {
                            const t = c.getViewSubImage(h, r);
                            a = t.viewport, 0 === n && (e.setRenderTargetTextures(m, t.colorTexture, h.ignoreDepthValues ? void 0 : t.depthStencilTexture), e.setRenderTarget(m))
                        }
                        let s = b[n];
                        void 0 === s && (s = new bi, s.layers.enable(n), s.viewport = new me, b[n] = s), s.matrix.fromArray(r.transform.matrix), s.projectionMatrix.fromArray(r.projectionMatrix), s.viewport.set(a.x, a.y, a.width, a.height), 0 === n && A.matrix.copy(s.matrix), !0 === i && A.cameras.push(s)
                    }
                }
                for (let e = 0; e < g.length; e++) {
                    const t = v[e],
                        n = g[e];
                    null !== t && void 0 !== n && n.update(t, i, o || a)
                }
                O && O(t, i), d = null
            })), this.setAnimationLoop = function(e) {
                O = e
            }, this.dispose = function() {}
        }
    }

    function pa(e, t) {
        function i(i, n) {
            i.opacity.value = n.opacity, n.color && i.diffuse.value.copy(n.color), n.emissive && i.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (i.map.value = n.map), n.alphaMap && (i.alphaMap.value = n.alphaMap), n.bumpMap && (i.bumpMap.value = n.bumpMap, i.bumpScale.value = n.bumpScale, 1 === n.side && (i.bumpScale.value *= -1)), n.displacementMap && (i.displacementMap.value = n.displacementMap, i.displacementScale.value = n.displacementScale, i.displacementBias.value = n.displacementBias), n.emissiveMap && (i.emissiveMap.value = n.emissiveMap), n.normalMap && (i.normalMap.value = n.normalMap, i.normalScale.value.copy(n.normalScale), 1 === n.side && i.normalScale.value.negate()), n.specularMap && (i.specularMap.value = n.specularMap), n.alphaTest > 0 && (i.alphaTest.value = n.alphaTest);
            const r = t.get(n).envMap;
            if (r && (i.envMap.value = r, i.flipEnvMap.value = r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1, i.reflectivity.value = n.reflectivity, i.ior.value = n.ior, i.refractionRatio.value = n.refractionRatio), n.lightMap) {
                i.lightMap.value = n.lightMap;
                const t = !0 !== e.physicallyCorrectLights ? Math.PI : 1;
                i.lightMapIntensity.value = n.lightMapIntensity * t
            }
            let a, s;
            n.aoMap && (i.aoMap.value = n.aoMap, i.aoMapIntensity.value = n.aoMapIntensity), n.map ? a = n.map : n.specularMap ? a = n.specularMap : n.displacementMap ? a = n.displacementMap : n.normalMap ? a = n.normalMap : n.bumpMap ? a = n.bumpMap : n.roughnessMap ? a = n.roughnessMap : n.metalnessMap ? a = n.metalnessMap : n.alphaMap ? a = n.alphaMap : n.emissiveMap ? a = n.emissiveMap : n.clearcoatMap ? a = n.clearcoatMap : n.clearcoatNormalMap ? a = n.clearcoatNormalMap : n.clearcoatRoughnessMap ? a = n.clearcoatRoughnessMap : n.iridescenceMap ? a = n.iridescenceMap : n.iridescenceThicknessMap ? a = n.iridescenceThicknessMap : n.specularIntensityMap ? a = n.specularIntensityMap : n.specularColorMap ? a = n.specularColorMap : n.transmissionMap ? a = n.transmissionMap : n.thicknessMap ? a = n.thicknessMap : n.sheenColorMap ? a = n.sheenColorMap : n.sheenRoughnessMap && (a = n.sheenRoughnessMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), i.uvTransform.value.copy(a.matrix)), n.aoMap ? s = n.aoMap : n.lightMap && (s = n.lightMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), i.uv2Transform.value.copy(s.matrix))
        }
        return {
            refreshFogUniforms: function(e, t) {
                e.fogColor.value.copy(t.color), t.isFog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t.isFogExp2 && (e.fogDensity.value = t.density)
            },
            refreshMaterialUniforms: function(e, n, r, a, s) {
                n.isMeshBasicMaterial || n.isMeshLambertMaterial ? i(e, n) : n.isMeshToonMaterial ? (i(e, n), function(e, t) {
                    t.gradientMap && (e.gradientMap.value = t.gradientMap)
                }(e, n)) : n.isMeshPhongMaterial ? (i(e, n), function(e, t) {
                    e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4)
                }(e, n)) : n.isMeshStandardMaterial ? (i(e, n), function(e, i) {
                    e.roughness.value = i.roughness, e.metalness.value = i.metalness, i.roughnessMap && (e.roughnessMap.value = i.roughnessMap);
                    i.metalnessMap && (e.metalnessMap.value = i.metalnessMap);
                    t.get(i).envMap && (e.envMapIntensity.value = i.envMapIntensity)
                }(e, n), n.isMeshPhysicalMaterial && function(e, t, i) {
                    e.ior.value = t.ior, t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value = t.sheenRoughness, t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap), t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap));
                    t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap), t.clearcoatNormalMap && (e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), e.clearcoatNormalMap.value = t.clearcoatNormalMap, 1 === t.side && e.clearcoatNormalScale.value.negate()));
                    t.iridescence > 0 && (e.iridescence.value = t.iridescence, e.iridescenceIOR.value = t.iridescenceIOR, e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0], e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1], t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap), t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap));
                    t.transmission > 0 && (e.transmission.value = t.transmission, e.transmissionSamplerMap.value = i.texture, e.transmissionSamplerSize.value.set(i.width, i.height), t.transmissionMap && (e.transmissionMap.value = t.transmissionMap), e.thickness.value = t.thickness, t.thicknessMap && (e.thicknessMap.value = t.thicknessMap), e.attenuationDistance.value = t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor));
                    e.specularIntensity.value = t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap);
                    t.specularColorMap && (e.specularColorMap.value = t.specularColorMap)
                }(e, n, s)) : n.isMeshMatcapMaterial ? (i(e, n), function(e, t) {
                    t.matcap && (e.matcap.value = t.matcap)
                }(e, n)) : n.isMeshDepthMaterial ? i(e, n) : n.isMeshDistanceMaterial ? (i(e, n), function(e, t) {
                    e.referencePosition.value.copy(t.referencePosition), e.nearDistance.value = t.nearDistance, e.farDistance.value = t.farDistance
                }(e, n)) : n.isMeshNormalMaterial ? i(e, n) : n.isLineBasicMaterial ? (function(e, t) {
                    e.diffuse.value.copy(t.color), e.opacity.value = t.opacity
                }(e, n), n.isLineDashedMaterial && function(e, t) {
                    e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale
                }(e, n)) : n.isPointsMaterial ? function(e, t, i, n) {
                    e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * i, e.scale.value = .5 * n, t.map && (e.map.value = t.map);
                    t.alphaMap && (e.alphaMap.value = t.alphaMap);
                    t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
                    let r;
                    t.map ? r = t.map : t.alphaMap && (r = t.alphaMap);
                    void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), e.uvTransform.value.copy(r.matrix))
                }(e, n, r, a) : n.isSpriteMaterial ? function(e, t) {
                    e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map);
                    t.alphaMap && (e.alphaMap.value = t.alphaMap);
                    t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
                    let i;
                    t.map ? i = t.map : t.alphaMap && (i = t.alphaMap);
                    void 0 !== i && (!0 === i.matrixAutoUpdate && i.updateMatrix(), e.uvTransform.value.copy(i.matrix))
                }(e, n) : n.isShadowMaterial ? (e.color.value.copy(n.color), e.opacity.value = n.opacity) : n.isShaderMaterial && (n.uniformsNeedUpdate = !1)
            }
        }
    }

    function fa(e = {}) {
        this.isWebGLRenderer = !0;
        const t = void 0 !== e.canvas ? e.canvas : function() {
                const e = K("canvas");
                return e.style.display = "block", e
            }(),
            i = void 0 !== e.context ? e.context : null,
            n = void 0 === e.depth || e.depth,
            r = void 0 === e.stencil || e.stencil,
            a = void 0 !== e.antialias && e.antialias,
            s = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
            o = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
            l = void 0 !== e.powerPreference ? e.powerPreference : "default",
            c = void 0 !== e.failIfMajorPerformanceCaveat && e.failIfMajorPerformanceCaveat;
        let h;
        h = null !== i ? i.getContextAttributes().alpha : void 0 !== e.alpha && e.alpha;
        let u = null,
            d = null;
        const p = [],
            f = [];
        this.domElement = t, this.debug = {
            checkShaderErrors: !0
        }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = R, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1, Object.defineProperties(this, {
            gammaFactor: {
                get: function() {
                    return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2
                },
                set: function() {
                    console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")
                }
            }
        });
        const m = this;
        let g = !1,
            v = 0,
            y = 0,
            S = null,
            T = -1,
            E = null;
        const A = new me,
            C = new me;
        let L = null,
            P = t.width,
            D = t.height,
            I = 1,
            N = null,
            z = null;
        const O = new me(0, 0, P, D),
            U = new me(0, 0, P, D);
        let F = !1;
        const B = new Ii;
        let k = !1,
            H = !1,
            G = null;
        const V = new Ke,
            W = new Y,
            j = new ye,
            q = {
                background: null,
                fog: null,
                environment: null,
                overrideMaterial: null,
                isScene: !0
            };

        function Z() {
            return null === S ? I : 1
        }
        let J, Q, $, ee, te, ie, ne, re, ae, se, oe, le, ce, he, ue, de, pe, fe, ve, _e, xe, Me, be, Se = i;

        function we(e, i) {
            for (let n = 0; n < e.length; n++) {
                const r = e[n],
                    a = t.getContext(r, i);
                if (null !== a) return a
            }
            return null
        }
        try {
            const e = {
                alpha: !0,
                depth: n,
                stencil: r,
                antialias: a,
                premultipliedAlpha: s,
                preserveDrawingBuffer: o,
                powerPreference: l,
                failIfMajorPerformanceCaveat: c
            };
            if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r142"), t.addEventListener("webglcontextlost", Ae, !1), t.addEventListener("webglcontextrestored", Ce, !1), t.addEventListener("webglcontextcreationerror", Le, !1), null === Se) {
                const t = ["webgl2", "webgl", "experimental-webgl"];
                if (!0 === m.isWebGL1Renderer && t.shift(), Se = we(t, e), null === Se) throw we(t) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
            }
            void 0 === Se.getShaderPrecisionFormat && (Se.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            })
        } catch (e) {
            throw console.error("THREE.WebGLRenderer: " + e.message), e
        }

        function Te() {
            J = new cn(Se), Q = new Vi(Se, J, e), J.init(Q), Me = new sa(Se, J, Q), $ = new ra(Se, J, Q), ee = new dn, te = new Wr, ie = new aa(Se, J, $, te, Q, Me, ee), ne = new ji(m), re = new ln(m), ae = new zi(Se, Q), be = new Hi(Se, J, ae, Q), se = new hn(Se, ae, ee, be), oe = new vn(Se, se, ae, ee), ve = new gn(Se, Q, ie), de = new Wi(te), le = new Vr(m, ne, re, J, Q, be, de), ce = new pa(m, te), he = new Yr, ue = new ea(J, Q), fe = new ki(m, ne, $, oe, h, s), pe = new na(m, oe, Q), _e = new Gi(Se, J, ee, Q), xe = new un(Se, J, ee, Q), ee.programs = le.programs, m.capabilities = Q, m.extensions = J, m.properties = te, m.renderLists = he, m.shadowMap = pe, m.state = $, m.info = ee
        }
        Te();
        const Ee = new da(m, Se);

        function Ae(e) {
            e.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), g = !0
        }

        function Ce() {
            console.log("THREE.WebGLRenderer: Context Restored."), g = !1;
            const e = ee.autoReset,
                t = pe.enabled,
                i = pe.autoUpdate,
                n = pe.needsUpdate,
                r = pe.type;
            Te(), ee.autoReset = e, pe.enabled = t, pe.autoUpdate = i, pe.needsUpdate = n, pe.type = r
        }

        function Le(e) {
            console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage)
        }

        function Pe(e) {
            const t = e.target;
            t.removeEventListener("dispose", Pe),
                function(e) {
                    (function(e) {
                        const t = te.get(e).programs;
                        void 0 !== t && (t.forEach((function(e) {
                            le.releaseProgram(e)
                        })), e.isShaderMaterial && le.releaseShaderCache(e))
                    })(e), te.remove(e)
                }(t)
        }
        this.xr = Ee, this.getContext = function() {
            return Se
        }, this.getContextAttributes = function() {
            return Se.getContextAttributes()
        }, this.forceContextLoss = function() {
            const e = J.get("WEBGL_lose_context");
            e && e.loseContext()
        }, this.forceContextRestore = function() {
            const e = J.get("WEBGL_lose_context");
            e && e.restoreContext()
        }, this.getPixelRatio = function() {
            return I
        }, this.setPixelRatio = function(e) {
            void 0 !== e && (I = e, this.setSize(P, D, !1))
        }, this.getSize = function(e) {
            return e.set(P, D)
        }, this.setSize = function(e, i, n) {
            Ee.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (P = e, D = i, t.width = Math.floor(e * I), t.height = Math.floor(i * I), !1 !== n && (t.style.width = e + "vw", t.style.height = i + "vh"), this.setViewport(0, 0, e, i))
        }, this.getDrawingBufferSize = function(e) {
            return e.set(P * I, D * I).floor()
        }, this.setDrawingBufferSize = function(e, i, n) {
            P = e, D = i, I = n, t.width = Math.floor(e * n), t.height = Math.floor(i * n), this.setViewport(0, 0, e, i)
        }, this.getCurrentViewport = function(e) {
            return e.copy(A)
        }, this.getViewport = function(e) {
            return e.copy(O)
        }, this.setViewport = function(e, t, i, n) {
            e.isVector4 ? O.set(e.x, e.y, e.z, e.w) : O.set(e, t, i, n), $.viewport(A.copy(O).multiplyScalar(I).floor())
        }, this.getScissor = function(e) {
            return e.copy(U)
        }, this.setScissor = function(e, t, i, n) {
            e.isVector4 ? U.set(e.x, e.y, e.z, e.w) : U.set(e, t, i, n), $.scissor(C.copy(U).multiplyScalar(I).floor())
        }, this.getScissorTest = function() {
            return F
        }, this.setScissorTest = function(e) {
            $.setScissorTest(F = e)
        }, this.setOpaqueSort = function(e) {
            N = e
        }, this.setTransparentSort = function(e) {
            z = e
        }, this.getClearColor = function(e) {
            return e.copy(fe.getClearColor())
        }, this.setClearColor = function() {
            fe.setClearColor.apply(fe, arguments)
        }, this.getClearAlpha = function() {
            return fe.getClearAlpha()
        }, this.setClearAlpha = function() {
            fe.setClearAlpha.apply(fe, arguments)
        }, this.clear = function(e = !0, t = !0, i = !0) {
            let n = 0;
            e && (n |= 16384), t && (n |= 256), i && (n |= 1024), Se.clear(n)
        }, this.clearColor = function() {
            this.clear(!0, !1, !1)
        }, this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }, this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }, this.dispose = function() {
            t.removeEventListener("webglcontextlost", Ae, !1), t.removeEventListener("webglcontextrestored", Ce, !1), t.removeEventListener("webglcontextcreationerror", Le, !1), he.dispose(), ue.dispose(), te.dispose(), ne.dispose(), re.dispose(), oe.dispose(), be.dispose(), le.dispose(), Ee.dispose(), Ee.removeEventListener("sessionstart", De), Ee.removeEventListener("sessionend", Ie), G && (G.dispose(), G = null), Ne.stop()
        }, this.renderBufferDirect = function(e, t, i, n, r, a) {
            null === t && (t = q);
            const s = r.isMesh && r.matrixWorld.determinant() < 0,
                o = function(e, t, i, n, r) {
                    !0 !== t.isScene && (t = q);
                    ie.resetTextureUnits();
                    const a = t.fog,
                        s = n.isMeshStandardMaterial ? t.environment : null,
                        o = null === S ? m.outputEncoding : !0 === S.isXRRenderTarget ? S.texture.encoding : R,
                        l = (n.isMeshStandardMaterial ? re : ne).get(n.envMap || s),
                        c = !0 === n.vertexColors && !!i.attributes.color && 4 === i.attributes.color.itemSize,
                        h = !!n.normalMap && !!i.attributes.tangent,
                        u = !!i.morphAttributes.position,
                        p = !!i.morphAttributes.normal,
                        f = !!i.morphAttributes.color,
                        g = n.toneMapped ? m.toneMapping : 0,
                        v = i.morphAttributes.position || i.morphAttributes.normal || i.morphAttributes.color,
                        _ = void 0 !== v ? v.length : 0,
                        x = te.get(n),
                        y = d.state.lights;
                    if (!0 === k && (!0 === H || e !== E)) {
                        const t = e === E && n.id === T;
                        de.setState(n, e, t)
                    }
                    let M = !1;
                    n.version === x.__version ? x.needsLights && x.lightsStateVersion !== y.state.version || x.outputEncoding !== o || r.isInstancedMesh && !1 === x.instancing ? M = !0 : r.isInstancedMesh || !0 !== x.instancing ? r.isSkinnedMesh && !1 === x.skinning ? M = !0 : r.isSkinnedMesh || !0 !== x.skinning ? x.envMap !== l || !0 === n.fog && x.fog !== a ? M = !0 : void 0 === x.numClippingPlanes || x.numClippingPlanes === de.numPlanes && x.numIntersection === de.numIntersection ? (x.vertexAlphas !== c || x.vertexTangents !== h || x.morphTargets !== u || x.morphNormals !== p || x.morphColors !== f || x.toneMapping !== g || !0 === Q.isWebGL2 && x.morphTargetsCount !== _) && (M = !0) : M = !0 : M = !0 : M = !0 : (M = !0, x.__version = n.version);
                    let b = x.currentProgram;
                    !0 === M && (b = Be(n, t, r));
                    let w = !1,
                        A = !1,
                        C = !1;
                    const L = b.getUniforms(),
                        P = x.uniforms;
                    $.useProgram(b.program) && (w = !0, A = !0, C = !0);
                    n.id !== T && (T = n.id, A = !0);
                    if (w || E !== e) {
                        if (L.setValue(Se, "projectionMatrix", e.projectionMatrix), Q.logarithmicDepthBuffer && L.setValue(Se, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), E !== e && (E = e, A = !0, C = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
                            const t = L.map.cameraPosition;
                            void 0 !== t && t.setValue(Se, j.setFromMatrixPosition(e.matrixWorld))
                        }(n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && L.setValue(Se, "isOrthographic", !0 === e.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || r.isSkinnedMesh) && L.setValue(Se, "viewMatrix", e.matrixWorldInverse)
                    }
                    if (r.isSkinnedMesh) {
                        L.setOptional(Se, r, "bindMatrix"), L.setOptional(Se, r, "bindMatrixInverse");
                        const e = r.skeleton;
                        e && (Q.floatVertexTextures ? (null === e.boneTexture && e.computeBoneTexture(), L.setValue(Se, "boneTexture", e.boneTexture, ie), L.setValue(Se, "boneTextureSize", e.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))
                    }
                    const N = i.morphAttributes;
                    (void 0 !== N.position || void 0 !== N.normal || void 0 !== N.color && !0 === Q.isWebGL2) && ve.update(r, i, n, b);
                    (A || x.receiveShadow !== r.receiveShadow) && (x.receiveShadow = r.receiveShadow, L.setValue(Se, "receiveShadow", r.receiveShadow));
                    A && (L.setValue(Se, "toneMappingExposure", m.toneMappingExposure), x.needsLights && (O = C, (z = P).ambientLightColor.needsUpdate = O, z.lightProbe.needsUpdate = O, z.directionalLights.needsUpdate = O, z.directionalLightShadows.needsUpdate = O, z.pointLights.needsUpdate = O, z.pointLightShadows.needsUpdate = O, z.spotLights.needsUpdate = O, z.spotLightShadows.needsUpdate = O, z.rectAreaLights.needsUpdate = O, z.hemisphereLights.needsUpdate = O), a && !0 === n.fog && ce.refreshFogUniforms(P, a), ce.refreshMaterialUniforms(P, n, I, D, G), Mr.upload(Se, x.uniformsList, P, ie));
                    var z, O;
                    n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Mr.upload(Se, x.uniformsList, P, ie), n.uniformsNeedUpdate = !1);
                    n.isSpriteMaterial && L.setValue(Se, "center", r.center);
                    return L.setValue(Se, "modelViewMatrix", r.modelViewMatrix), L.setValue(Se, "normalMatrix", r.normalMatrix), L.setValue(Se, "modelMatrix", r.matrixWorld), b
                }(e, t, i, n, r);
            $.setMaterial(n, s);
            let l = i.index;
            const c = i.attributes.position;
            if (null === l) {
                if (void 0 === c || 0 === c.count) return
            } else if (0 === l.count) return;
            let h, u = 1;
            !0 === n.wireframe && (l = se.getWireframeAttribute(i), u = 2), be.setup(r, n, o, i, l);
            let p = _e;
            null !== l && (h = ae.get(l), p = xe, p.setIndex(h));
            const f = null !== l ? l.count : c.count,
                g = i.drawRange.start * u,
                v = i.drawRange.count * u,
                _ = null !== a ? a.start * u : 0,
                x = null !== a ? a.count * u : 1 / 0,
                y = Math.max(g, _),
                M = Math.min(f, g + v, _ + x) - 1,
                b = Math.max(0, M - y + 1);
            if (0 !== b) {
                if (r.isMesh) !0 === n.wireframe ? ($.setLineWidth(n.wireframeLinewidth * Z()), p.setMode(1)) : p.setMode(4);
                else if (r.isLine) {
                    let e = n.linewidth;
                    void 0 === e && (e = 1), $.setLineWidth(e * Z()), r.isLineSegments ? p.setMode(1) : r.isLineLoop ? p.setMode(2) : p.setMode(3)
                } else r.isPoints ? p.setMode(0) : r.isSprite && p.setMode(4);
                if (r.isInstancedMesh) p.renderInstances(y, b, r.count);
                else if (i.isInstancedBufferGeometry) {
                    const e = Math.min(i.instanceCount, i._maxInstanceCount);
                    p.renderInstances(y, b, e)
                } else p.render(y, b)
            }
        }, this.compile = function(e, t) {
            d = ue.get(e), d.init(), f.push(d), e.traverseVisible((function(e) {
                e.isLight && e.layers.test(t.layers) && (d.pushLight(e), e.castShadow && d.pushShadow(e))
            })), d.setupLights(m.physicallyCorrectLights), e.traverse((function(t) {
                const i = t.material;
                if (i)
                    if (Array.isArray(i))
                        for (let n = 0; n < i.length; n++) {
                            Be(i[n], e, t)
                        } else Be(i, e, t)
            })), f.pop(), d = null
        };
        let Re = null;

        function De() {
            Ne.stop()
        }

        function Ie() {
            Ne.start()
        }
        const Ne = new Ni;

        function ze(e, t, i, n) {
            if (!1 === e.visible) return;
            if (e.layers.test(t.layers))
                if (e.isGroup) i = e.renderOrder;
                else if (e.isLOD) !0 === e.autoUpdate && e.update(t);
            else if (e.isLight) d.pushLight(e), e.castShadow && d.pushShadow(e);
            else if (e.isSprite) {
                if (!e.frustumCulled || B.intersectsSprite(e)) {
                    n && j.setFromMatrixPosition(e.matrixWorld).applyMatrix4(V);
                    const t = oe.update(e),
                        r = e.material;
                    r.visible && u.push(e, t, r, i, j.z, null)
                }
            } else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.frame !== ee.render.frame && (e.skeleton.update(), e.skeleton.frame = ee.render.frame), !e.frustumCulled || B.intersectsObject(e))) {
                n && j.setFromMatrixPosition(e.matrixWorld).applyMatrix4(V);
                const t = oe.update(e),
                    r = e.material;
                if (Array.isArray(r)) {
                    const n = t.groups;
                    for (let a = 0, s = n.length; a < s; a++) {
                        const s = n[a],
                            o = r[s.materialIndex];
                        o && o.visible && u.push(e, t, o, i, j.z, s)
                    }
                } else r.visible && u.push(e, t, r, i, j.z, null)
            }
            const r = e.children;
            for (let e = 0, a = r.length; e < a; e++) ze(r[e], t, i, n)
        }

        function Oe(e, t, i, n) {
            const r = e.opaque,
                s = e.transmissive,
                o = e.transparent;
            d.setupLightsView(i), s.length > 0 && function(e, t, i) {
                const n = Q.isWebGL2;
                null === G && (G = new ge(1, 1, {
                    generateMipmaps: !0,
                    type: J.has("EXT_color_buffer_half_float") ? b : x,
                    minFilter: _,
                    samples: n && !0 === a ? 4 : 0
                }));
                m.getDrawingBufferSize(W), n ? G.setSize(W.x, W.y) : G.setSize(X(W.x), X(W.y));
                const r = m.getRenderTarget();
                m.setRenderTarget(G), m.clear();
                const s = m.toneMapping;
                m.toneMapping = 0, Ue(e, t, i), m.toneMapping = s, ie.updateMultisampleRenderTarget(G), ie.updateRenderTargetMipmap(G), m.setRenderTarget(r)
            }(r, t, i), n && $.viewport(A.copy(n)), r.length > 0 && Ue(r, t, i), s.length > 0 && Ue(s, t, i), o.length > 0 && Ue(o, t, i), $.buffers.depth.setTest(!0), $.buffers.depth.setMask(!0), $.buffers.color.setMask(!0), $.setPolygonOffset(!1)
        }

        function Ue(e, t, i) {
            const n = !0 === t.isScene ? t.overrideMaterial : null;
            for (let r = 0, a = e.length; r < a; r++) {
                const a = e[r],
                    s = a.object,
                    o = a.geometry,
                    l = null === n ? a.material : n,
                    c = a.group;
                s.layers.test(i.layers) && Fe(s, t, i, o, l, c)
            }
        }

        function Fe(e, t, i, n, r, a) {
            e.onBeforeRender(m, t, i, n, r, a), e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), r.onBeforeRender(m, t, i, n, e, a), !0 === r.transparent && 2 === r.side ? (r.side = 1, r.needsUpdate = !0, m.renderBufferDirect(i, t, n, r, e, a), r.side = 0, r.needsUpdate = !0, m.renderBufferDirect(i, t, n, r, e, a), r.side = 2) : m.renderBufferDirect(i, t, n, r, e, a), e.onAfterRender(m, t, i, n, r, a)
        }

        function Be(e, t, i) {
            !0 !== t.isScene && (t = q);
            const n = te.get(e),
                r = d.state.lights,
                a = d.state.shadowsArray,
                s = r.state.version,
                o = le.getParameters(e, r.state, a, t, i),
                l = le.getProgramCacheKey(o);
            let c = n.programs;
            n.environment = e.isMeshStandardMaterial ? t.environment : null, n.fog = t.fog, n.envMap = (e.isMeshStandardMaterial ? re : ne).get(e.envMap || n.environment), void 0 === c && (e.addEventListener("dispose", Pe), c = new Map, n.programs = c);
            let h = c.get(l);
            if (void 0 !== h) {
                if (n.currentProgram === h && n.lightsStateVersion === s) return ke(e, o), h
            } else o.uniforms = le.getUniforms(e), e.onBuild(i, o, m), e.onBeforeCompile(o, m), h = le.acquireProgram(o, l), c.set(l, h), n.uniforms = o.uniforms;
            const u = n.uniforms;
            (e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping || (u.clippingPlanes = de.uniform), ke(e, o), n.needsLights = function(e) {
                return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && !0 === e.lights
            }(e), n.lightsStateVersion = s, n.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotShadowMatrix.value = r.state.spotShadowMatrix, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
            const p = h.getUniforms(),
                f = Mr.seqWithValue(p.seq, u);
            return n.currentProgram = h, n.uniformsList = f, h
        }

        function ke(e, t) {
            const i = te.get(e);
            i.outputEncoding = t.outputEncoding, i.instancing = t.instancing, i.skinning = t.skinning, i.morphTargets = t.morphTargets, i.morphNormals = t.morphNormals, i.morphColors = t.morphColors, i.morphTargetsCount = t.morphTargetsCount, i.numClippingPlanes = t.numClippingPlanes, i.numIntersection = t.numClipIntersection, i.vertexAlphas = t.vertexAlphas, i.vertexTangents = t.vertexTangents, i.toneMapping = t.toneMapping
        }
        Ne.setAnimationLoop((function(e) {
            Re && Re(e)
        })), "undefined" != typeof self && Ne.setContext(self), this.setAnimationLoop = function(e) {
            Re = e, Ee.setAnimationLoop(e), null === e ? Ne.stop() : Ne.start()
        }, Ee.addEventListener("sessionstart", De), Ee.addEventListener("sessionend", Ie), this.render = function(e, t) {
            if (void 0 !== t && !0 !== t.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            if (!0 === g) return;
            !0 === e.autoUpdate && e.updateMatrixWorld(), null === t.parent && t.updateMatrixWorld(), !0 === Ee.enabled && !0 === Ee.isPresenting && (!0 === Ee.cameraAutoUpdate && Ee.updateCamera(t), t = Ee.getCamera()), !0 === e.isScene && e.onBeforeRender(m, e, t, S), d = ue.get(e, f.length), d.init(), f.push(d), V.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), B.setFromProjectionMatrix(V), H = this.localClippingEnabled, k = de.init(this.clippingPlanes, H, t), u = he.get(e, p.length), u.init(), p.push(u), ze(e, t, 0, m.sortObjects), u.finish(), !0 === m.sortObjects && u.sort(N, z), !0 === k && de.beginShadows();
            const i = d.state.shadowsArray;
            if (pe.render(i, e, t), !0 === k && de.endShadows(), !0 === this.info.autoReset && this.info.reset(), fe.render(u, e), d.setupLights(m.physicallyCorrectLights), t.isArrayCamera) {
                const i = t.cameras;
                for (let t = 0, n = i.length; t < n; t++) {
                    const n = i[t];
                    Oe(u, e, n, n.viewport)
                }
            } else Oe(u, e, t);
            null !== S && (ie.updateMultisampleRenderTarget(S), ie.updateRenderTargetMipmap(S)), !0 === e.isScene && e.onAfterRender(m, e, t), be.resetDefaultState(), T = -1, E = null, f.pop(), d = f.length > 0 ? f[f.length - 1] : null, p.pop(), u = p.length > 0 ? p[p.length - 1] : null
        }, this.getActiveCubeFace = function() {
            return v
        }, this.getActiveMipmapLevel = function() {
            return y
        }, this.getRenderTarget = function() {
            return S
        }, this.setRenderTargetTextures = function(e, t, i) {
            te.get(e.texture).__webglTexture = t, te.get(e.depthTexture).__webglTexture = i;
            const n = te.get(e);
            n.__hasExternalTextures = !0, n.__hasExternalTextures && (n.__autoAllocateDepthBuffer = void 0 === i, n.__autoAllocateDepthBuffer || !0 === J.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), n.__useRenderToTexture = !1))
        }, this.setRenderTargetFramebuffer = function(e, t) {
            const i = te.get(e);
            i.__webglFramebuffer = t, i.__useDefaultFramebuffer = void 0 === t
        }, this.setRenderTarget = function(e, t = 0, i = 0) {
            S = e, v = t, y = i;
            let n = !0;
            if (e) {
                const t = te.get(e);
                void 0 !== t.__useDefaultFramebuffer ? ($.bindFramebuffer(36160, null), n = !1) : void 0 === t.__webglFramebuffer ? ie.setupRenderTarget(e) : t.__hasExternalTextures && ie.rebindTextures(e, te.get(e.texture).__webglTexture, te.get(e.depthTexture).__webglTexture)
            }
            let r = null,
                a = !1,
                s = !1;
            if (e) {
                const i = e.texture;
                (i.isData3DTexture || i.isDataArrayTexture) && (s = !0);
                const n = te.get(e).__webglFramebuffer;
                e.isWebGLCubeRenderTarget ? (r = n[t], a = !0) : r = Q.isWebGL2 && e.samples > 0 && !1 === ie.useMultisampledRTT(e) ? te.get(e).__webglMultisampledFramebuffer : n, A.copy(e.viewport), C.copy(e.scissor), L = e.scissorTest
            } else A.copy(O).multiplyScalar(I).floor(), C.copy(U).multiplyScalar(I).floor(), L = F;
            if ($.bindFramebuffer(36160, r) && Q.drawBuffers && n && $.drawBuffers(e, r), $.viewport(A), $.scissor(C), $.setScissorTest(L), a) {
                const n = te.get(e.texture);
                Se.framebufferTexture2D(36160, 36064, 34069 + t, n.__webglTexture, i)
            } else if (s) {
                const n = te.get(e.texture),
                    r = t || 0;
                Se.framebufferTextureLayer(36160, 36064, n.__webglTexture, i || 0, r)
            }
            T = -1
        }, this.readRenderTargetPixels = function(e, t, i, n, r, a, s) {
            if (!e || !e.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            let o = te.get(e).__webglFramebuffer;
            if (e.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o) {
                $.bindFramebuffer(36160, o);
                try {
                    const s = e.texture,
                        o = s.format,
                        l = s.type;
                    if (o !== w && Me.convert(o) !== Se.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    const c = l === b && (J.has("EXT_color_buffer_half_float") || Q.isWebGL2 && J.has("EXT_color_buffer_float"));
                    if (!(l === x || Me.convert(l) === Se.getParameter(35738) || l === M && (Q.isWebGL2 || J.has("OES_texture_float") || J.has("WEBGL_color_buffer_float")) || c)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    t >= 0 && t <= e.width - n && i >= 0 && i <= e.height - r && Se.readPixels(t, i, n, r, Me.convert(o), Me.convert(l), a)
                } finally {
                    const e = null !== S ? te.get(S).__webglFramebuffer : null;
                    $.bindFramebuffer(36160, e)
                }
            }
        }, this.copyFramebufferToTexture = function(e, t, i = 0) {
            const n = Math.pow(2, -i),
                r = Math.floor(t.image.width * n),
                a = Math.floor(t.image.height * n);
            ie.setTexture2D(t, 0), Se.copyTexSubImage2D(3553, i, 0, 0, e.x, e.y, r, a), $.unbindTexture()
        }, this.copyTextureToTexture = function(e, t, i, n = 0) {
            const r = t.image.width,
                a = t.image.height,
                s = Me.convert(i.format),
                o = Me.convert(i.type);
            ie.setTexture2D(i, 0), Se.pixelStorei(37440, i.flipY), Se.pixelStorei(37441, i.premultiplyAlpha), Se.pixelStorei(3317, i.unpackAlignment), t.isDataTexture ? Se.texSubImage2D(3553, n, e.x, e.y, r, a, s, o, t.image.data) : t.isCompressedTexture ? Se.compressedTexSubImage2D(3553, n, e.x, e.y, t.mipmaps[0].width, t.mipmaps[0].height, s, t.mipmaps[0].data) : Se.texSubImage2D(3553, n, e.x, e.y, s, o, t.image), 0 === n && i.generateMipmaps && Se.generateMipmap(3553), $.unbindTexture()
        }, this.copyTextureToTexture3D = function(e, t, i, n, r = 0) {
            if (m.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
            const a = e.max.x - e.min.x + 1,
                s = e.max.y - e.min.y + 1,
                o = e.max.z - e.min.z + 1,
                l = Me.convert(n.format),
                c = Me.convert(n.type);
            let h;
            if (n.isData3DTexture) ie.setTexture3D(n, 0), h = 32879;
            else {
                if (!n.isDataArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                ie.setTexture2DArray(n, 0), h = 35866
            }
            Se.pixelStorei(37440, n.flipY), Se.pixelStorei(37441, n.premultiplyAlpha), Se.pixelStorei(3317, n.unpackAlignment);
            const u = Se.getParameter(3314),
                d = Se.getParameter(32878),
                p = Se.getParameter(3316),
                f = Se.getParameter(3315),
                g = Se.getParameter(32877),
                v = i.isCompressedTexture ? i.mipmaps[0] : i.image;
            Se.pixelStorei(3314, v.width), Se.pixelStorei(32878, v.height), Se.pixelStorei(3316, e.min.x), Se.pixelStorei(3315, e.min.y), Se.pixelStorei(32877, e.min.z), i.isDataTexture || i.isData3DTexture ? Se.texSubImage3D(h, r, t.x, t.y, t.z, a, s, o, l, c, v.data) : i.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), Se.compressedTexSubImage3D(h, r, t.x, t.y, t.z, a, s, o, l, v.data)) : Se.texSubImage3D(h, r, t.x, t.y, t.z, a, s, o, l, c, v), Se.pixelStorei(3314, u), Se.pixelStorei(32878, d), Se.pixelStorei(3316, p), Se.pixelStorei(3315, f), Se.pixelStorei(32877, g), 0 === r && n.generateMipmaps && Se.generateMipmap(h), $.unbindTexture()
        }, this.initTexture = function(e) {
            e.isCubeTexture ? ie.setTextureCube(e, 0) : e.isData3DTexture ? ie.setTexture3D(e, 0) : e.isDataArrayTexture ? ie.setTexture2DArray(e, 0) : ie.setTexture2D(e, 0), $.unbindTexture()
        }, this.resetState = function() {
            v = 0, y = 0, S = null, $.reset(), be.reset()
        }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }))
    }
    class ma extends bt {
        constructor() {
            super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }))
        }
        copy(e, t) {
            return super.copy(e, t), null !== e.background && (this.background = e.background.clone()), null !== e.environment && (this.environment = e.environment.clone()), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return null !== this.fog && (t.object.fog = this.fog.toJSON()), t
        }
    }
    class ga {
        constructor(e, t) {
            this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = void 0 !== e ? e.length / t : 0, this.usage = O, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0, this.uuid = V()
        }
        onUploadCallback() {}
        set needsUpdate(e) {
            !0 === e && this.version++
        }
        setUsage(e) {
            return this.usage = e, this
        }
        copy(e) {
            return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this
        }
        copyAt(e, t, i) {
            e *= this.stride, i *= t.stride;
            for (let n = 0, r = this.stride; n < r; n++) this.array[e + n] = t.array[i + n];
            return this
        }
        set(e, t = 0) {
            return this.array.set(e, t), this
        }
        clone(e) {
            void 0 === e.arrayBuffers && (e.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = V()), void 0 === e.arrayBuffers[this.array.buffer._uuid] && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
            const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),
                i = new this.constructor(t, this.stride);
            return i.setUsage(this.usage), i
        }
        onUpload(e) {
            return this.onUploadCallback = e, this
        }
        toJSON(e) {
            return void 0 === e.arrayBuffers && (e.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = V()), void 0 === e.arrayBuffers[this.array.buffer._uuid] && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
                uuid: this.uuid,
                buffer: this.array.buffer._uuid,
                type: this.array.constructor.name,
                stride: this.stride
            }
        }
    }
    const va = new ye;
    class _a {
        constructor(e, t, i, n = !1) {
            this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = i, this.normalized = !0 === n
        }
        get count() {
            return this.data.count
        }
        get array() {
            return this.data.array
        }
        set needsUpdate(e) {
            this.data.needsUpdate = e
        }
        applyMatrix4(e) {
            for (let t = 0, i = this.data.count; t < i; t++) va.fromBufferAttribute(this, t), va.applyMatrix4(e), this.setXYZ(t, va.x, va.y, va.z);
            return this
        }
        applyNormalMatrix(e) {
            for (let t = 0, i = this.count; t < i; t++) va.fromBufferAttribute(this, t), va.applyNormalMatrix(e), this.setXYZ(t, va.x, va.y, va.z);
            return this
        }
        transformDirection(e) {
            for (let t = 0, i = this.count; t < i; t++) va.fromBufferAttribute(this, t), va.transformDirection(e), this.setXYZ(t, va.x, va.y, va.z);
            return this
        }
        setX(e, t) {
            return this.data.array[e * this.data.stride + this.offset] = t, this
        }
        setY(e, t) {
            return this.data.array[e * this.data.stride + this.offset + 1] = t, this
        }
        setZ(e, t) {
            return this.data.array[e * this.data.stride + this.offset + 2] = t, this
        }
        setW(e, t) {
            return this.data.array[e * this.data.stride + this.offset + 3] = t, this
        }
        getX(e) {
            return this.data.array[e * this.data.stride + this.offset]
        }
        getY(e) {
            return this.data.array[e * this.data.stride + this.offset + 1]
        }
        getZ(e) {
            return this.data.array[e * this.data.stride + this.offset + 2]
        }
        getW(e) {
            return this.data.array[e * this.data.stride + this.offset + 3]
        }
        setXY(e, t, i) {
            return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this
        }
        setXYZ(e, t, i, n) {
            return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = n, this
        }
        setXYZW(e, t, i, n, r) {
            return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = n, this.data.array[e + 3] = r, this
        }
        clone(e) {
            if (void 0 === e) {
                console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");
                const e = [];
                for (let t = 0; t < this.count; t++) {
                    const i = t * this.data.stride + this.offset;
                    for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[i + t])
                }
                return new Bt(new this.array.constructor(e), this.itemSize, this.normalized)
            }
            return void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}), void 0 === e.interleavedBuffers[this.data.uuid] && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new _a(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized)
        }
        toJSON(e) {
            if (void 0 === e) {
                console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");
                const e = [];
                for (let t = 0; t < this.count; t++) {
                    const i = t * this.data.stride + this.offset;
                    for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[i + t])
                }
                return {
                    itemSize: this.itemSize,
                    type: this.array.constructor.name,
                    array: e,
                    normalized: this.normalized
                }
            }
            return void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}), void 0 === e.interleavedBuffers[this.data.uuid] && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
                isInterleavedBufferAttribute: !0,
                itemSize: this.itemSize,
                data: this.data.uuid,
                offset: this.offset,
                normalized: this.normalized
            }
        }
    }
    class xa extends zt {
        constructor(e) {
            super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new le(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e)
        }
        copy(e) {
            return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this
        }
    }
    let ya;
    const Ma = new ye,
        ba = new ye,
        Sa = new ye,
        wa = new Y,
        Ta = new Y,
        Ea = new Ke,
        Aa = new ye,
        Ca = new ye,
        La = new ye,
        Pa = new Y,
        Ra = new Y,
        Da = new Y;
    class Ia extends bt {
        constructor(e) {
            if (super(), this.isSprite = !0, this.type = "Sprite", void 0 === ya) {
                ya = new Jt;
                const e = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),
                    t = new ga(e, 5);
                ya.setIndex([0, 1, 2, 0, 2, 3]), ya.setAttribute("position", new _a(t, 3, 0, !1)), ya.setAttribute("uv", new _a(t, 2, 3, !1))
            }
            this.geometry = ya, this.material = void 0 !== e ? e : new xa, this.center = new Y(.5, .5)
        }
        raycast(e, t) {
            null === e.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), ba.setFromMatrixScale(this.matrixWorld), Ea.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Sa.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && ba.multiplyScalar(-Sa.z);
            const i = this.material.rotation;
            let n, r;
            0 !== i && (r = Math.cos(i), n = Math.sin(i));
            const a = this.center;
            Na(Aa.set(-.5, -.5, 0), Sa, a, ba, n, r), Na(Ca.set(.5, -.5, 0), Sa, a, ba, n, r), Na(La.set(.5, .5, 0), Sa, a, ba, n, r), Pa.set(0, 0), Ra.set(1, 0), Da.set(1, 1);
            let s = e.ray.intersectTriangle(Aa, Ca, La, !1, Ma);
            if (null === s && (Na(Ca.set(-.5, .5, 0), Sa, a, ba, n, r), Ra.set(0, 1), s = e.ray.intersectTriangle(Aa, La, Ca, !1, Ma), null === s)) return;
            const o = e.ray.origin.distanceTo(Ma);
            o < e.near || o > e.far || t.push({
                distance: o,
                point: Ma.clone(),
                uv: It.getUV(Ma, Aa, Ca, La, Pa, Ra, Da, new Y),
                face: null,
                object: this
            })
        }
        copy(e, t) {
            return super.copy(e, t), void 0 !== e.center && this.center.copy(e.center), this.material = e.material, this
        }
    }

    function Na(e, t, i, n, r, a) {
        wa.subVectors(e, i).addScalar(.5).multiply(n), void 0 !== r ? (Ta.x = a * wa.x - r * wa.y, Ta.y = r * wa.x + a * wa.y) : Ta.copy(wa), e.copy(t), e.x += Ta.x, e.y += Ta.y, e.applyMatrix4(Ea)
    }
    class za extends fe {
        constructor(e, t, i, n, r, a, s, o, l) {
            super(e, t, i, n, r, a, s, o, l), this.isCanvasTexture = !0, this.needsUpdate = !0
        }
    }
    class Oa extends zt {
        constructor(e) {
            super(), this.isMeshStandardMaterial = !0, this.defines = {
                STANDARD: ""
            }, this.type = "MeshStandardMaterial", this.color = new le(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new le(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Y(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e)
        }
        copy(e) {
            return super.copy(e), this.defines = {
                STANDARD: ""
            }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this
        }
    }
    class Ua extends bt {
        constructor(e, t = 1) {
            super(), this.isLight = !0, this.type = "Light", this.color = new le(e), this.intensity = t
        }
        dispose() {}
        copy(e, t) {
            return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (t.object.distance = this.distance), void 0 !== this.angle && (t.object.angle = this.angle), void 0 !== this.decay && (t.object.decay = this.decay), void 0 !== this.penumbra && (t.object.penumbra = this.penumbra), void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()), t
        }
    }
    const Fa = new Ke,
        Ba = new ye,
        ka = new ye;
    const Ha = new Ke,
        Ga = new ye,
        Va = new ye;
    class Wa extends class {
        constructor(e) {
            this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Y(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ke, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ii, this._frameExtents = new Y(1, 1), this._viewportCount = 1, this._viewports = [new me(0, 0, 1, 1)]
        }
        getViewportCount() {
            return this._viewportCount
        }
        getFrustum() {
            return this._frustum
        }
        updateMatrices(e) {
            const t = this.camera,
                i = this.matrix;
            Ba.setFromMatrixPosition(e.matrixWorld), t.position.copy(Ba), ka.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ka), t.updateMatrixWorld(), Fa.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Fa), i.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), i.multiply(t.projectionMatrix), i.multiply(t.matrixWorldInverse)
        }
        getViewport(e) {
            return this._viewports[e]
        }
        getFrameExtents() {
            return this._frameExtents
        }
        dispose() {
            this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose()
        }
        copy(e) {
            return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        toJSON() {
            const e = {};
            return 0 !== this.bias && (e.bias = this.bias), 0 !== this.normalBias && (e.normalBias = this.normalBias), 1 !== this.radius && (e.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
        }
    } {
        constructor() {
            super(new bi(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Y(4, 2), this._viewportCount = 6, this._viewports = [new me(2, 1, 1, 1), new me(0, 1, 1, 1), new me(3, 1, 1, 1), new me(1, 1, 1, 1), new me(3, 0, 1, 1), new me(1, 0, 1, 1)], this._cubeDirections = [new ye(1, 0, 0), new ye(-1, 0, 0), new ye(0, 0, 1), new ye(0, 0, -1), new ye(0, 1, 0), new ye(0, -1, 0)], this._cubeUps = [new ye(0, 1, 0), new ye(0, 1, 0), new ye(0, 1, 0), new ye(0, 1, 0), new ye(0, 0, 1), new ye(0, 0, -1)]
        }
        updateMatrices(e, t = 0) {
            const i = this.camera,
                n = this.matrix,
                r = e.distance || i.far;
            r !== i.far && (i.far = r, i.updateProjectionMatrix()), Ga.setFromMatrixPosition(e.matrixWorld), i.position.copy(Ga), Va.copy(i.position), Va.add(this._cubeDirections[t]), i.up.copy(this._cubeUps[t]), i.lookAt(Va), i.updateMatrixWorld(), n.makeTranslation(-Ga.x, -Ga.y, -Ga.z), Ha.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ha)
        }
    }
    class ja extends Ua {
        constructor(e, t, i = 0, n = 1) {
            super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = i, this.decay = n, this.shadow = new Wa
        }
        get power() {
            return 4 * this.intensity * Math.PI
        }
        set power(e) {
            this.intensity = e / (4 * Math.PI)
        }
        dispose() {
            this.shadow.dispose()
        }
        copy(e, t) {
            return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
        }
    }
    class qa extends Ua {
        constructor(e, t) {
            super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight"
        }
    }
    class Xa {
        constructor(e = !0) {
            this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
        }
        start() {
            this.startTime = Ya(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
        }
        stop() {
            this.getElapsedTime(), this.running = !1, this.autoStart = !1
        }
        getElapsedTime() {
            return this.getDelta(), this.elapsedTime
        }
        getDelta() {
            let e = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                const t = Ya();
                e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e
            }
            return e
        }
    }

    function Ya() {
        return ("undefined" == typeof performance ? Date : performance).now()
    }
    class Za {
        constructor(e = 1, t = 0, i = 0) {
            return this.radius = e, this.phi = t, this.theta = i, this
        }
        set(e, t, i) {
            return this.radius = e, this.phi = t, this.theta = i, this
        }
        copy(e) {
            return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this
        }
        makeSafe() {
            const e = 1e-6;
            return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)), this
        }
        setFromVector3(e) {
            return this.setFromCartesianCoords(e.x, e.y, e.z)
        }
        setFromCartesianCoords(e, t, i) {
            return this.radius = Math.sqrt(e * e + t * t + i * i), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, i), this.phi = Math.acos(W(t / this.radius, -1, 1))), this
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }

    function Ja(e, t, i, n, r, a, s, o) {
        const l = (e, t, i, n) => [new Y(e / s, 1 - n / o), new Y(i / s, 1 - n / o), new Y(i / s, 1 - t / o), new Y(e / s, 1 - t / o)],
            c = l(t + a, i, t + n + a, i + a),
            h = l(t + n + a, i, t + 2 * n + a, i + a),
            u = l(t, i + a, t + a, i + a + r),
            d = l(t + a, i + a, t + n + a, i + a + r),
            p = l(t + n + a, i + a, t + n + 2 * a, i + r + a),
            f = l(t + n + 2 * a, i + a, t + 2 * n + 2 * a, i + r + a),
            m = e.attributes.uv;
        m.copyVector2sArray([p[3], p[2], p[0], p[1], u[3], u[2], u[0], u[1], c[3], c[2], c[0], c[1], h[0], h[1], h[3], h[2], d[3], d[2], d[0], d[1], f[3], f[2], f[0], f[1]]), m.needsUpdate = !0
    }

    function Ka(e, t, i, n, r, a) {
        Ja(e, t, i, n, r, a, 64, 64)
    }

    function Qa(e, t, i, n, r, a) {
        Ja(e, t, i, n, r, a, 64, 32)
    }
    class $a extends la {
        constructor(e, t) {
            super(), this.innerLayer = e, this.outerLayer = t, e.name = "inner", t.name = "outer"
        }
    }
    class es extends la {
        constructor() {
            super(), this.modelListeners = [], this.slim = !1, this._map = null, this.layer1Material = new Oa({
                side: 0
            }), this.layer2Material = new Oa({
                side: 2,
                transparent: !0,
                alphaTest: 1e-5
            }), this.layer1MaterialBiased = this.layer1Material.clone(), this.layer1MaterialBiased.polygonOffset = !0, this.layer1MaterialBiased.polygonOffsetFactor = 1, this.layer1MaterialBiased.polygonOffsetUnits = 1, this.layer2MaterialBiased = this.layer2Material.clone(), this.layer2MaterialBiased.polygonOffset = !0, this.layer2MaterialBiased.polygonOffsetFactor = 1, this.layer2MaterialBiased.polygonOffsetUnits = 1;
            const e = new gi(8, 8, 8);
            Ka(e, 0, 0, 8, 8, 8);
            const t = new fi(e, this.layer1Material),
                i = new gi(9, 9, 9);
            Ka(i, 32, 0, 8, 8, 8);
            const n = new fi(i, this.layer2Material);
            this.head = new $a(t, n), this.head.name = "head", this.head.add(t, n), t.position.y = 4, n.position.y = 4, this.add(this.head);
            const r = new gi(8, 12, 4);
            Ka(r, 16, 16, 8, 12, 4);
            const a = new fi(r, this.layer1Material),
                s = new gi(8.5, 12.5, 4.5);
            Ka(s, 16, 32, 8, 12, 4);
            const o = new fi(s, this.layer2Material);
            this.body = new $a(a, o), this.body.name = "body", this.body.add(a, o), this.body.position.y = -6, this.add(this.body);
            const l = new gi,
                c = new fi(l, this.layer1MaterialBiased);
            this.modelListeners.push((() => {
                c.scale.x = this.slim ? 3 : 4, c.scale.y = 12, c.scale.z = 4, Ka(l, 40, 16, this.slim ? 3 : 4, 12, 4)
            }));
            const h = new gi,
                u = new fi(h, this.layer2MaterialBiased);
            this.modelListeners.push((() => {
                u.scale.x = this.slim ? 3.5 : 4.5, u.scale.y = 12.5, u.scale.z = 4.5, Ka(h, 40, 32, this.slim ? 3 : 4, 12, 4)
            }));
            const d = new la;
            d.add(c, u), this.modelListeners.push((() => {
                d.position.x = this.slim ? -.5 : -1
            })), d.position.y = -4, this.rightArm = new $a(c, u), this.rightArm.name = "rightArm", this.rightArm.add(d), this.rightArm.position.x = -5, this.rightArm.position.y = -2, this.add(this.rightArm);
            const p = new gi,
                f = new fi(p, this.layer1MaterialBiased);
            this.modelListeners.push((() => {
                f.scale.x = this.slim ? 3 : 4, f.scale.y = 12, f.scale.z = 4, Ka(p, 32, 48, this.slim ? 3 : 4, 12, 4)
            }));
            const m = new gi,
                g = new fi(m, this.layer2MaterialBiased);
            this.modelListeners.push((() => {
                g.scale.x = this.slim ? 3.5 : 4.5, g.scale.y = 12.5, g.scale.z = 4.5, Ka(m, 48, 48, this.slim ? 3 : 4, 12, 4)
            }));
            const v = new la;
            v.add(f, g), this.modelListeners.push((() => {
                v.position.x = this.slim ? .5 : 1
            })), v.position.y = -4, this.leftArm = new $a(f, g), this.leftArm.name = "leftArm", this.leftArm.add(v), this.leftArm.position.x = 5, this.leftArm.position.y = -2, this.add(this.leftArm);
            const _ = new gi(4, 12, 4);
            Ka(_, 0, 16, 4, 12, 4);
            const x = new fi(_, this.layer1MaterialBiased),
                y = new gi(4.5, 12.5, 4.5);
            Ka(y, 0, 32, 4, 12, 4);
            const M = new fi(y, this.layer2MaterialBiased),
                b = new la;
            b.add(x, M), b.position.y = -6, this.rightLeg = new $a(x, M), this.rightLeg.name = "rightLeg", this.rightLeg.add(b), this.rightLeg.position.x = -1.9, this.rightLeg.position.y = -12, this.rightLeg.position.z = -.1, this.add(this.rightLeg);
            const S = new gi(4, 12, 4);
            Ka(S, 16, 48, 4, 12, 4);
            const w = new fi(S, this.layer1MaterialBiased),
                T = new gi(4.5, 12.5, 4.5);
            Ka(T, 0, 48, 4, 12, 4);
            const E = new fi(T, this.layer2MaterialBiased),
                A = new la;
            A.add(w, E), A.position.y = -6, this.leftLeg = new $a(w, E), this.leftLeg.name = "leftLeg", this.leftLeg.add(A), this.leftLeg.position.x = 1.9, this.leftLeg.position.y = -12, this.leftLeg.position.z = -.1, this.add(this.leftLeg), this.modelType = "default"
        }
        get map() {
            return this._map
        }
        set map(e) {
            this._map = e, this.layer1Material.map = e, this.layer1Material.needsUpdate = !0, this.layer1MaterialBiased.map = e, this.layer1MaterialBiased.needsUpdate = !0, this.layer2Material.map = e, this.layer2Material.needsUpdate = !0, this.layer2MaterialBiased.map = e, this.layer2MaterialBiased.needsUpdate = !0
        }
        get modelType() {
            return this.slim ? "slim" : "default"
        }
        set modelType(e) {
            this.slim = "slim" === e, this.modelListeners.forEach((e => e()))
        }
        getBodyParts() {
            return this.children.filter((e => e instanceof $a))
        }
        setInnerLayerVisible(e) {
            this.getBodyParts().forEach((t => t.innerLayer.visible = e))
        }
        setOuterLayerVisible(e) {
            this.getBodyParts().forEach((t => t.outerLayer.visible = e))
        }
        resetJoints() {
            this.head.rotation.set(0, 0, 0), this.leftArm.rotation.set(0, 0, 0), this.rightArm.rotation.set(0, 0, 0), this.leftLeg.rotation.set(0, 0, 0), this.rightLeg.rotation.set(0, 0, 0)
        }
    }
    class ts extends la {
        constructor() {
            super(), this.material = new Oa({
                side: 2,
                transparent: !0,
                alphaTest: 1e-5
            });
            const e = new gi(10, 16, 1);
            Qa(e, 0, 0, 10, 16, 1), this.cape = new fi(e, this.material), this.cape.position.y = -8, this.cape.position.z = .5, this.add(this.cape)
        }
        get map() {
            return this.material.map
        }
        set map(e) {
            this.material.map = e, this.material.needsUpdate = !0
        }
    }
    class is extends la {
        constructor() {
            super(), this.material = new Oa({
                side: 2,
                transparent: !0,
                alphaTest: 1e-5
            });
            const e = new gi(12, 22, 4);
            Qa(e, 22, 0, 10, 20, 2);
            const t = new fi(e, this.material);
            t.position.x = -5, t.position.y = -10, t.position.z = -1, this.leftWing = new la, this.leftWing.add(t), this.add(this.leftWing);
            const i = new gi(12, 22, 4);
            Qa(i, 22, 0, 10, 20, 2);
            const n = new fi(i, this.material);
            n.scale.x = -1, n.position.x = 5, n.position.y = -10, n.position.z = -1, this.rightWing = new la, this.rightWing.add(n), this.add(this.rightWing), this.leftWing.position.x = 5, this.leftWing.rotation.x = .2617994, this.resetJoints()
        }
        resetJoints() {
            this.leftWing.rotation.y = .01, this.leftWing.rotation.z = .2617994, this.updateRightWing()
        }
        updateRightWing() {
            this.rightWing.position.x = -this.leftWing.position.x, this.rightWing.position.y = this.leftWing.position.y, this.rightWing.rotation.x = this.leftWing.rotation.x, this.rightWing.rotation.y = -this.leftWing.rotation.y, this.rightWing.rotation.z = -this.leftWing.rotation.z
        }
        get map() {
            return this.material.map
        }
        set map(e) {
            this.material.map = e, this.material.needsUpdate = !0
        }
    }
    class ns extends la {
        constructor() {
            super(), this.material = new Oa({
                side: 0
            });
            const e = new gi(8, 8, 4 / 3);
            Ja(e, 0, 0, 6, 6, 1, 14, 7), this.rightEar = new fi(e, this.material), this.rightEar.name = "rightEar", this.rightEar.position.x = -6, this.add(this.rightEar), this.leftEar = new fi(e, this.material), this.leftEar.name = "leftEar", this.leftEar.position.x = 6, this.add(this.leftEar)
        }
        get map() {
            return this.material.map
        }
        set map(e) {
            this.material.map = e, this.material.needsUpdate = !0
        }
    }
    const rs = 10.8 * Math.PI / 180;
    class as extends la {
        constructor() {
            super(), this.skin = new es, this.skin.name = "skin", this.skin.position.y = 8, this.add(this.skin), this.cape = new ts, this.cape.name = "cape", this.cape.position.y = 8, this.cape.position.z = -2, this.cape.rotation.x = rs, this.cape.rotation.y = Math.PI, this.add(this.cape), this.elytra = new is, this.elytra.name = "elytra", this.elytra.position.y = 8, this.elytra.position.z = -2, this.elytra.visible = !1, this.add(this.elytra), this.ears = new ns, this.ears.name = "ears", this.ears.position.y = 10, this.ears.position.z = 2 / 3, this.ears.visible = !1, this.skin.head.add(this.ears)
        }
        get backEquipment() {
            return this.cape.visible ? "cape" : this.elytra.visible ? "elytra" : null
        }
        set backEquipment(e) {
            this.cape.visible = "cape" === e, this.elytra.visible = "elytra" === e
        }
        resetJoints() {
            this.skin.resetJoints(), this.cape.rotation.x = rs, this.elytra.resetJoints()
        }
    }

    function ss(e) {
        return e instanceof HTMLImageElement || e instanceof HTMLVideoElement || e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap || "undefined" != typeof OffscreenCanvas && e instanceof OffscreenCanvas
    }

    function os(e, t, i, n, r) {
        const a = e.getImageData(t, i, n, r);
        for (let e = 0; e < n; e++)
            for (let t = 0; t < r; t++) {
                const i = 4 * (e + t * n);
                if (255 !== a.data[i + 3]) return !0
            }
        return !1
    }

    function ls(e) {
        return e / 64
    }

    function cs(e, t, i) {
        if (i) {
            if (os(e, 0, 0, t, t)) return
        } else if (os(e, 0, 0, t, t / 2)) return;
        const n = ls(t),
            r = (t, i, r, a) => e.clearRect(t * n, i * n, r * n, a * n);
        r(40, 0, 8, 8), r(48, 0, 8, 8), r(32, 8, 8, 8), r(40, 8, 8, 8), r(48, 8, 8, 8), r(56, 8, 8, 8), i && (r(4, 32, 4, 4), r(8, 32, 4, 4), r(0, 36, 4, 12), r(4, 36, 4, 12), r(8, 36, 4, 12), r(12, 36, 4, 12), r(20, 32, 8, 4), r(28, 32, 8, 4), r(16, 36, 4, 12), r(20, 36, 8, 12), r(28, 36, 4, 12), r(32, 36, 8, 12), r(44, 32, 4, 4), r(48, 32, 4, 4), r(40, 36, 4, 12), r(44, 36, 4, 12), r(48, 36, 4, 12), r(52, 36, 12, 12), r(4, 48, 4, 4), r(8, 48, 4, 4), r(0, 52, 4, 12), r(4, 52, 4, 12), r(8, 52, 4, 12), r(12, 52, 4, 12), r(52, 48, 4, 4), r(56, 48, 4, 4), r(48, 52, 4, 12), r(52, 52, 4, 12), r(56, 52, 4, 12), r(60, 52, 4, 12))
    }

    function hs(e, t) {
        let i = !1;
        if (t.width !== t.height) {
            if (t.width !== 2 * t.height) throw new Error(`Bad skin size: ${t.width}x${t.height}`);
            i = !0
        }
        const n = e.getContext("2d");
        if (i) {
            const i = t.width;
            e.width = i, e.height = i, n.clearRect(0, 0, i, i), n.drawImage(t, 0, 0, i, i / 2),
                function(e, t) {
                    const i = ls(t),
                        n = (t, n, r, a, s, o, l) => function(e, t, i, n, r, a, s, o) {
                            const l = e.getImageData(t, i, n, r);
                            if (o)
                                for (let e = 0; e < r; e++)
                                    for (let t = 0; t < n / 2; t++) {
                                        const i = 4 * (t + e * n),
                                            r = 4 * (n - t - 1 + e * n),
                                            a = l.data[i],
                                            s = l.data[i + 1],
                                            o = l.data[i + 2],
                                            c = l.data[i + 3],
                                            h = l.data[r],
                                            u = l.data[r + 1],
                                            d = l.data[r + 2],
                                            p = l.data[r + 3];
                                        l.data[i] = h, l.data[i + 1] = u, l.data[i + 2] = d, l.data[i + 3] = p, l.data[r] = a, l.data[r + 1] = s, l.data[r + 2] = o, l.data[r + 3] = c
                                    }
                            e.putImageData(l, a, s)
                        }(e, t * i, n * i, r * i, a * i, s * i, o * i, l);
                    n(4, 16, 4, 4, 20, 48, !0), n(8, 16, 4, 4, 24, 48, !0), n(0, 20, 4, 12, 24, 52, !0), n(4, 20, 4, 12, 20, 52, !0), n(8, 20, 4, 12, 16, 52, !0), n(12, 20, 4, 12, 28, 52, !0), n(44, 16, 4, 4, 36, 48, !0), n(48, 16, 4, 4, 40, 48, !0), n(40, 20, 4, 12, 40, 52, !0), n(44, 20, 4, 12, 36, 52, !0), n(48, 20, 4, 12, 32, 52, !0), n(52, 20, 4, 12, 44, 52, !0)
                }(n, i), cs(n, e.width, !1)
        } else e.width = t.width, e.height = t.height, n.clearRect(0, 0, t.width, t.height), n.drawImage(t, 0, 0, e.width, e.height), cs(n, e.width, !0)
    }

    function us(e, t) {
        const i = function(e) {
            if (e.width === 2 * e.height) return e.width / 64;
            if (17 * e.width == 22 * e.height) return e.width / 22;
            if (11 * e.width == 23 * e.height) return e.width / 46;
            throw new Error(`Bad cape size: ${e.width}x${e.height}`)
        }(t);
        e.width = 64 * i, e.height = 32 * i;
        const n = e.getContext("2d");
        n.clearRect(0, 0, e.width, e.height), n.drawImage(t, 0, 0, t.width, t.height)
    }

    function ds(e, t) {
        const i = function(e) {
            if (e.width === 2 * e.height && e.height % 7 == 0) return e.height / 7;
            throw new Error(`Bad ears size: ${e.width}x${e.height}`)
        }(t);
        e.width = 14 * i, e.height = 7 * i;
        const n = e.getContext("2d");
        n.clearRect(0, 0, e.width, e.height), n.drawImage(t, 0, 0, t.width, t.height)
    }

    function ps(e, t) {
        if (t.width !== t.height && t.width !== 2 * t.height) throw new Error(`Bad skin size: ${t.width}x${t.height}`);
        const i = ls(t.width),
            n = 14 * i,
            r = 7 * i;
        e.width = n, e.height = r;
        const a = e.getContext("2d");
        a.clearRect(0, 0, n, r), a.drawImage(t, 24 * i, 0, n, r, 0, 0, n, r)
    }
    async function fs(e) {
        const t = document.createElement("img");
        return new Promise(((i, n) => {
            t.onload = () => i(t), t.onerror = n, t.crossOrigin = "anonymous", "string" == typeof e ? t.src = e : (void 0 !== e.crossOrigin && (t.crossOrigin = e.crossOrigin), void 0 !== e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), t.src = e.src)
        }))
    }
    const ms = {
            type: "change"
        },
        gs = {
            type: "start"
        },
        vs = {
            type: "end"
        };
    class _s extends B {
        constructor(e, l) {
            super(), void 0 === l && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), l === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = e, this.domElement = l, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new ye, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
                LEFT: "ArrowLeft",
                UP: "ArrowUp",
                RIGHT: "ArrowRight",
                BOTTOM: "ArrowDown"
            }, this.mouseButtons = {
                LEFT: t,
                MIDDLE: i,
                RIGHT: n
            }, this.touches = {
                ONE: r,
                TWO: s
            }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
                return p.phi
            }, this.getAzimuthalAngle = function() {
                return p.theta
            }, this.getDistance = function() {
                return this.object.position.distanceTo(this.target)
            }, this.listenToKeyEvents = function(e) {
                e.addEventListener("keydown", K), this._domElementKeyEvents = e
            }, this.saveState = function() {
                c.target0.copy(c.target), c.position0.copy(c.object.position), c.zoom0 = c.object.zoom
            }, this.reset = function() {
                c.target.copy(c.target0), c.object.position.copy(c.position0), c.object.zoom = c.zoom0, c.object.updateProjectionMatrix(), c.dispatchEvent(ms), c.update(), u = h.NONE
            }, this.update = function() {
                const t = new ye,
                    i = (new xe).setFromUnitVectors(e.up, new ye(0, 1, 0)),
                    n = i.clone().invert(),
                    r = new ye,
                    a = new xe,
                    s = 2 * Math.PI;
                return function() {
                    const e = c.object.position;
                    t.copy(e).sub(c.target), t.applyQuaternion(i), p.setFromVector3(t), c.autoRotate && u === h.NONE && P(2 * Math.PI / 60 / 60 * c.autoRotateSpeed), c.enableDamping ? (p.theta += f.theta * c.dampingFactor, p.phi += f.phi * c.dampingFactor) : (p.theta += f.theta, p.phi += f.phi);
                    let o = c.minAzimuthAngle,
                        l = c.maxAzimuthAngle;
                    return isFinite(o) && isFinite(l) && (o < -Math.PI ? o += s : o > Math.PI && (o -= s), l < -Math.PI ? l += s : l > Math.PI && (l -= s), p.theta = o <= l ? Math.max(o, Math.min(l, p.theta)) : p.theta > (o + l) / 2 ? Math.max(o, p.theta) : Math.min(l, p.theta)), p.phi = Math.max(c.minPolarAngle, Math.min(c.maxPolarAngle, p.phi)), p.makeSafe(), p.radius *= m, p.radius = Math.max(c.minDistance, Math.min(c.maxDistance, p.radius)), !0 === c.enableDamping ? c.target.addScaledVector(g, c.dampingFactor) : c.target.add(g), t.setFromSpherical(p), t.applyQuaternion(n), e.copy(c.target).add(t), c.object.lookAt(c.target), !0 === c.enableDamping ? (f.theta *= 1 - c.dampingFactor, f.phi *= 1 - c.dampingFactor, g.multiplyScalar(1 - c.dampingFactor)) : (f.set(0, 0, 0), g.set(0, 0, 0)), m = 1, !!(v || r.distanceToSquared(c.object.position) > d || 8 * (1 - a.dot(c.object.quaternion)) > d) && (c.dispatchEvent(ms), r.copy(c.object.position), a.copy(c.object.quaternion), v = !1, !0)
                }
            }(), this.dispose = function() {
                c.domElement.removeEventListener("contextmenu", Q), c.domElement.removeEventListener("pointerdown", j), c.domElement.removeEventListener("pointercancel", Z), c.domElement.removeEventListener("wheel", J), c.domElement.removeEventListener("pointermove", q), c.domElement.removeEventListener("pointerup", X), null !== c._domElementKeyEvents && c._domElementKeyEvents.removeEventListener("keydown", K)
            };
            const c = this,
                h = {
                    NONE: -1,
                    ROTATE: 0,
                    DOLLY: 1,
                    PAN: 2,
                    TOUCH_ROTATE: 3,
                    TOUCH_PAN: 4,
                    TOUCH_DOLLY_PAN: 5,
                    TOUCH_DOLLY_ROTATE: 6
                };
            let u = h.NONE;
            const d = 1e-6,
                p = new Za,
                f = new Za;
            let m = 1;
            const g = new ye;
            let v = !1;
            const _ = new Y,
                x = new Y,
                y = new Y,
                M = new Y,
                b = new Y,
                S = new Y,
                w = new Y,
                T = new Y,
                E = new Y,
                A = [],
                C = {};

            function L() {
                return Math.pow(.95, c.zoomSpeed)
            }

            function P(e) {
                f.theta -= e
            }

            function R(e) {
                f.phi -= e
            }
            const D = function() {
                    const e = new ye;
                    return function(t, i) {
                        e.setFromMatrixColumn(i, 0), e.multiplyScalar(-t), g.add(e)
                    }
                }(),
                I = function() {
                    const e = new ye;
                    return function(t, i) {
                        !0 === c.screenSpacePanning ? e.setFromMatrixColumn(i, 1) : (e.setFromMatrixColumn(i, 0), e.crossVectors(c.object.up, e)), e.multiplyScalar(t), g.add(e)
                    }
                }(),
                N = function() {
                    const e = new ye;
                    return function(t, i) {
                        const n = c.domElement;
                        if (c.object.isPerspectiveCamera) {
                            const r = c.object.position;
                            e.copy(r).sub(c.target);
                            let a = e.length();
                            a *= Math.tan(c.object.fov / 2 * Math.PI / 180), D(2 * t * a / n.clientHeight, c.object.matrix), I(2 * i * a / n.clientHeight, c.object.matrix)
                        } else c.object.isOrthographicCamera ? (D(t * (c.object.right - c.object.left) / c.object.zoom / n.clientWidth, c.object.matrix), I(i * (c.object.top - c.object.bottom) / c.object.zoom / n.clientHeight, c.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), c.enablePan = !1)
                    }
                }();

            function z(e) {
                c.object.isPerspectiveCamera ? m /= e : c.object.isOrthographicCamera ? (c.object.zoom = Math.max(c.minZoom, Math.min(c.maxZoom, c.object.zoom * e)), c.object.updateProjectionMatrix(), v = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), c.enableZoom = !1)
            }

            function O(e) {
                c.object.isPerspectiveCamera ? m *= e : c.object.isOrthographicCamera ? (c.object.zoom = Math.max(c.minZoom, Math.min(c.maxZoom, c.object.zoom / e)), c.object.updateProjectionMatrix(), v = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), c.enableZoom = !1)
            }

            function U(e) {
                _.set(e.clientX, e.clientY)
            }

            function F(e) {
                M.set(e.clientX, e.clientY)
            }

            function B() {
                if (1 === A.length) _.set(A[0].pageX, A[0].pageY);
                else {
                    const e = .5 * (A[0].pageX + A[1].pageX),
                        t = .5 * (A[0].pageY + A[1].pageY);
                    _.set(e, t)
                }
            }

            function k() {
                if (1 === A.length) M.set(A[0].pageX, A[0].pageY);
                else {
                    const e = .5 * (A[0].pageX + A[1].pageX),
                        t = .5 * (A[0].pageY + A[1].pageY);
                    M.set(e, t)
                }
            }

            function H() {
                const e = A[0].pageX - A[1].pageX,
                    t = A[0].pageY - A[1].pageY,
                    i = Math.sqrt(e * e + t * t);
                w.set(0, i)
            }

            function G(e) {
                if (1 == A.length) x.set(e.pageX, e.pageY);
                else {
                    const t = te(e),
                        i = .5 * (e.pageX + t.x),
                        n = .5 * (e.pageY + t.y);
                    x.set(i, n)
                }
                y.subVectors(x, _).multiplyScalar(c.rotateSpeed);
                const t = c.domElement;
                P(2 * Math.PI * y.x / t.clientHeight), R(2 * Math.PI * y.y / t.clientHeight), _.copy(x)
            }

            function V(e) {
                if (1 === A.length) b.set(e.pageX, e.pageY);
                else {
                    const t = te(e),
                        i = .5 * (e.pageX + t.x),
                        n = .5 * (e.pageY + t.y);
                    b.set(i, n)
                }
                S.subVectors(b, M).multiplyScalar(c.panSpeed), N(S.x, S.y), M.copy(b)
            }

            function W(e) {
                const t = te(e),
                    i = e.pageX - t.x,
                    n = e.pageY - t.y,
                    r = Math.sqrt(i * i + n * n);
                T.set(0, r), E.set(0, Math.pow(T.y / w.y, c.zoomSpeed)), z(E.y), w.copy(T)
            }

            function j(e) {
                !1 !== c.enabled && (0 === A.length && (c.domElement.setPointerCapture(e.pointerId), c.domElement.addEventListener("pointermove", q), c.domElement.addEventListener("pointerup", X)), function(e) {
                    A.push(e)
                }(e), "touch" === e.pointerType ? function(e) {
                    switch (ee(e), A.length) {
                        case 1:
                            switch (c.touches.ONE) {
                                case r:
                                    if (!1 === c.enableRotate) return;
                                    B(), u = h.TOUCH_ROTATE;
                                    break;
                                case a:
                                    if (!1 === c.enablePan) return;
                                    k(), u = h.TOUCH_PAN;
                                    break;
                                default:
                                    u = h.NONE
                            }
                            break;
                        case 2:
                            switch (c.touches.TWO) {
                                case s:
                                    if (!1 === c.enableZoom && !1 === c.enablePan) return;
                                    c.enableZoom && H(), c.enablePan && k(), u = h.TOUCH_DOLLY_PAN;
                                    break;
                                case o:
                                    if (!1 === c.enableZoom && !1 === c.enableRotate) return;
                                    c.enableZoom && H(), c.enableRotate && B(), u = h.TOUCH_DOLLY_ROTATE;
                                    break;
                                default:
                                    u = h.NONE
                            }
                            break;
                        default:
                            u = h.NONE
                    }
                    u !== h.NONE && c.dispatchEvent(gs)
                }(e) : function(e) {
                    let r;
                    switch (e.button) {
                        case 0:
                            r = c.mouseButtons.LEFT;
                            break;
                        case 1:
                            r = c.mouseButtons.MIDDLE;
                            break;
                        case 2:
                            r = c.mouseButtons.RIGHT;
                            break;
                        default:
                            r = -1
                    }
                    switch (r) {
                        case i:
                            if (!1 === c.enableZoom) return;
                            ! function(e) {
                                w.set(e.clientX, e.clientY)
                            }(e), u = h.DOLLY;
                            break;
                        case t:
                            if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                if (!1 === c.enablePan) return;
                                F(e), u = h.PAN
                            } else {
                                if (!1 === c.enableRotate) return;
                                U(e), u = h.ROTATE
                            }
                            break;
                        case n:
                            if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                if (!1 === c.enableRotate) return;
                                U(e), u = h.ROTATE
                            } else {
                                if (!1 === c.enablePan) return;
                                F(e), u = h.PAN
                            }
                            break;
                        default:
                            u = h.NONE
                    }
                    u !== h.NONE && c.dispatchEvent(gs)
                }(e))
            }

            function q(e) {
                !1 !== c.enabled && ("touch" === e.pointerType ? function(e) {
                    switch (ee(e), u) {
                        case h.TOUCH_ROTATE:
                            if (!1 === c.enableRotate) return;
                            G(e), c.update();
                            break;
                        case h.TOUCH_PAN:
                            if (!1 === c.enablePan) return;
                            V(e), c.update();
                            break;
                        case h.TOUCH_DOLLY_PAN:
                            if (!1 === c.enableZoom && !1 === c.enablePan) return;
                            ! function(e) {
                                c.enableZoom && W(e), c.enablePan && V(e)
                            }(e), c.update();
                            break;
                        case h.TOUCH_DOLLY_ROTATE:
                            if (!1 === c.enableZoom && !1 === c.enableRotate) return;
                            ! function(e) {
                                c.enableZoom && W(e), c.enableRotate && G(e)
                            }(e), c.update();
                            break;
                        default:
                            u = h.NONE
                    }
                }(e) : function(e) {
                    if (!1 === c.enabled) return;
                    switch (u) {
                        case h.ROTATE:
                            if (!1 === c.enableRotate) return;
                            ! function(e) {
                                x.set(e.clientX, e.clientY), y.subVectors(x, _).multiplyScalar(c.rotateSpeed);
                                const t = c.domElement;
                                P(2 * Math.PI * y.x / t.clientHeight), R(2 * Math.PI * y.y / t.clientHeight), _.copy(x), c.update()
                            }(e);
                            break;
                        case h.DOLLY:
                            if (!1 === c.enableZoom) return;
                            ! function(e) {
                                T.set(e.clientX, e.clientY), E.subVectors(T, w), E.y > 0 ? z(L()) : E.y < 0 && O(L()), w.copy(T), c.update()
                            }(e);
                            break;
                        case h.PAN:
                            if (!1 === c.enablePan) return;
                            ! function(e) {
                                b.set(e.clientX, e.clientY), S.subVectors(b, M).multiplyScalar(c.panSpeed), N(S.x, S.y), M.copy(b), c.update()
                            }(e)
                    }
                }(e))
            }

            function X(e) {
                $(e), 0 === A.length && (c.domElement.releasePointerCapture(e.pointerId), c.domElement.removeEventListener("pointermove", q), c.domElement.removeEventListener("pointerup", X)), c.dispatchEvent(vs), u = h.NONE
            }

            function Z(e) {
                $(e)
            }

            function J(e) {
                !1 !== c.enabled && !1 !== c.enableZoom && u === h.NONE && (e.preventDefault(), c.dispatchEvent(gs), function(e) {
                    e.deltaY < 0 ? O(L()) : e.deltaY > 0 && z(L()), c.update()
                }(e), c.dispatchEvent(vs))
            }

            function K(e) {
                !1 !== c.enabled && !1 !== c.enablePan && function(e) {
                    let t = !1;
                    switch (e.code) {
                        case c.keys.UP:
                            N(0, c.keyPanSpeed), t = !0;
                            break;
                        case c.keys.BOTTOM:
                            N(0, -c.keyPanSpeed), t = !0;
                            break;
                        case c.keys.LEFT:
                            N(c.keyPanSpeed, 0), t = !0;
                            break;
                        case c.keys.RIGHT:
                            N(-c.keyPanSpeed, 0), t = !0
                    }
                    t && (e.preventDefault(), c.update())
                }(e)
            }

            function Q(e) {
                !1 !== c.enabled && e.preventDefault()
            }

            function $(e) {
                delete C[e.pointerId];
                for (let t = 0; t < A.length; t++)
                    if (A[t].pointerId == e.pointerId) return void A.splice(t, 1)
            }

            function ee(e) {
                let t = C[e.pointerId];
                void 0 === t && (t = new Y, C[e.pointerId] = t), t.set(e.pageX, e.pageY)
            }

            function te(e) {
                const t = e.pointerId === A[0].pointerId ? A[1] : A[0];
                return C[t.pointerId]
            }
            c.domElement.addEventListener("contextmenu", Q), c.domElement.addEventListener("pointerdown", j), c.domElement.addEventListener("pointercancel", Z), c.domElement.addEventListener("wheel", J, {
                passive: !1
            }), this.update()
        }
    }
    const xs = {
        uniforms: {
            tDiffuse: {
                value: null
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: "varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
        fragmentShader: "uniform float opacity;uniform sampler2D tDiffuse;varying vec2 vUv;void main(){gl_FragColor=texture2D(tDiffuse,vUv);gl_FragColor.a*=opacity;}"
    };
    class ys {
        constructor() {
            this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
        }
        setSize() {}
        render() {
            console.error("THREE.Pass: .render() must be implemented in derived pass.")
        }
    }
    const Ms = new qi(-1, 1, 1, -1, 0, 1),
        bs = new Jt;
    bs.setAttribute("position", new Gt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), bs.setAttribute("uv", new Gt([0, 2, 0, 0, 2, 0], 2));
    class Ss {
        constructor(e) {
            this._mesh = new fi(bs, e)
        }
        dispose() {
            this._mesh.geometry.dispose()
        }
        render(e) {
            e.render(this._mesh, Ms)
        }
        get material() {
            return this._mesh.material
        }
        set material(e) {
            this._mesh.material = e
        }
    }
    class ws extends ys {
        constructor(e, t) {
            super(), this.textureID = void 0 !== t ? t : "tDiffuse", e instanceof yi ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = xi.clone(e.uniforms), this.material = new yi({
                defines: Object.assign({}, e.defines),
                uniforms: this.uniforms,
                vertexShader: e.vertexShader,
                fragmentShader: e.fragmentShader
            })), this.fsQuad = new Ss(this.material)
        }
        render(e, t, i) {
            this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = i.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e))
        }
    }
    class Ts extends ys {
        constructor(e, t) {
            super(), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1
        }
        render(e, t, i) {
            const n = e.getContext(),
                r = e.state;
            let a, s;
            r.buffers.color.setMask(!1), r.buffers.depth.setMask(!1), r.buffers.color.setLocked(!0), r.buffers.depth.setLocked(!0), this.inverse ? (a = 0, s = 1) : (a = 1, s = 0), r.buffers.stencil.setTest(!0), r.buffers.stencil.setOp(n.REPLACE, n.REPLACE, n.REPLACE), r.buffers.stencil.setFunc(n.ALWAYS, a, 4294967295), r.buffers.stencil.setClear(s), r.buffers.stencil.setLocked(!0), e.setRenderTarget(i), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), r.buffers.color.setLocked(!1), r.buffers.depth.setLocked(!1), r.buffers.stencil.setLocked(!1), r.buffers.stencil.setFunc(n.EQUAL, 1, 4294967295), r.buffers.stencil.setOp(n.KEEP, n.KEEP, n.KEEP), r.buffers.stencil.setLocked(!0)
        }
    }
    class Es extends ys {
        constructor() {
            super(), this.needsSwap = !1
        }
        render(e) {
            e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1)
        }
    }
    class As {
        constructor(e, t) {
            if (this.renderer = e, void 0 === t) {
                const i = e.getSize(new Y);
                this._pixelRatio = e.getPixelRatio(), this._width = i.width, this._height = i.height, (t = new ge(this._width * this._pixelRatio, this._height * this._pixelRatio)).texture.name = "EffectComposer.rt1"
            } else this._pixelRatio = 1, this._width = t.width, this._height = t.height;
            this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], void 0 === xs && console.error("THREE.EffectComposer relies on CopyShader"), void 0 === ws && console.error("THREE.EffectComposer relies on ShaderPass"), this.copyPass = new ws(xs), this.clock = new Xa
        }
        swapBuffers() {
            const e = this.readBuffer;
            this.readBuffer = this.writeBuffer, this.writeBuffer = e
        }
        addPass(e) {
            this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
        }
        insertPass(e, t) {
            this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
        }
        removePass(e) {
            const t = this.passes.indexOf(e); - 1 !== t && this.passes.splice(t, 1)
        }
        isLastEnabledPass(e) {
            for (let t = e + 1; t < this.passes.length; t++)
                if (this.passes[t].enabled) return !1;
            return !0
        }
        render(e) {
            void 0 === e && (e = this.clock.getDelta());
            const t = this.renderer.getRenderTarget();
            let i = !1;
            for (let t = 0, n = this.passes.length; t < n; t++) {
                const n = this.passes[t];
                if (!1 !== n.enabled) {
                    if (n.renderToScreen = this.renderToScreen && this.isLastEnabledPass(t), n.render(this.renderer, this.writeBuffer, this.readBuffer, e, i), n.needsSwap) {
                        if (i) {
                            const t = this.renderer.getContext(),
                                i = this.renderer.state.buffers.stencil;
                            i.setFunc(t.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), i.setFunc(t.EQUAL, 1, 4294967295)
                        }
                        this.swapBuffers()
                    }
                    void 0 !== Ts && (n instanceof Ts ? i = !0 : n instanceof Es && (i = !1))
                }
            }
            this.renderer.setRenderTarget(t)
        }
        reset(e) {
            if (void 0 === e) {
                const t = this.renderer.getSize(new Y);
                this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, (e = this.renderTarget1.clone()).setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
            }
            this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2
        }
        setSize(e, t) {
            this._width = e, this._height = t;
            const i = this._width * this._pixelRatio,
                n = this._height * this._pixelRatio;
            this.renderTarget1.setSize(i, n), this.renderTarget2.setSize(i, n);
            for (let e = 0; e < this.passes.length; e++) this.passes[e].setSize(i, n)
        }
        setPixelRatio(e) {
            this._pixelRatio = e, this.setSize(this._width, this._height)
        }
    }
    new qi(-1, 1, 1, -1, 0, 1);
    const Cs = new Jt;
    Cs.setAttribute("position", new Gt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), Cs.setAttribute("uv", new Gt([0, 2, 0, 0, 2, 0], 2));
    class Ls extends ys {
        constructor(e, t, i, n, r) {
            super(), this.scene = e, this.camera = t, this.overrideMaterial = i, this.clearColor = n, this.clearAlpha = void 0 !== r ? r : 0, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this._oldClearColor = new le
        }
        render(e, t, i) {
            const n = e.autoClear;
            let r, a;
            e.autoClear = !1, void 0 !== this.overrideMaterial && (a = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor && (e.getClearColor(this._oldClearColor), r = e.getClearAlpha(), e.setClearColor(this.clearColor, this.clearAlpha)), this.clearDepth && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : i), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor && e.setClearColor(this._oldClearColor, r), void 0 !== this.overrideMaterial && (this.scene.overrideMaterial = a), e.autoClear = n
        }
    }
    const Ps = {
        uniforms: {
            tDiffuse: {
                value: null
            },
            resolution: {
                value: new Y(1 / 1024, 1 / 512)
            }
        },
        vertexShader: "varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
        fragmentShader: "precision highp float;uniform sampler2D tDiffuse;uniform vec2 resolution;varying vec2 vUv;\n#ifndef FXAA_DISCARD\n#define FXAA_DISCARD 0\n#endif\n#define FxaaTexTop(t,p)texture2D(t,p,-100.0)\n#define FxaaTexOff(t,p,o,r)texture2D(t,p+(o*r),-100.0)\n#define NUM_SAMPLES 5\nfloat contrast(vec4 a,vec4 b){vec4 diff=abs(a-b);return max(max(max(diff.r,diff.g),diff.b),diff.a);}vec4 FxaaPixelShader(vec2 posM,sampler2D tex,vec2 fxaaQualityRcpFrame,float fxaaQualityEdgeThreshold,float fxaaQualityinvEdgeThreshold){vec4 rgbaM=FxaaTexTop(tex,posM);vec4 rgbaS=FxaaTexOff(tex,posM,vec2(0.0,1.0),fxaaQualityRcpFrame.xy);vec4 rgbaE=FxaaTexOff(tex,posM,vec2(1.0,0.0),fxaaQualityRcpFrame.xy);vec4 rgbaN=FxaaTexOff(tex,posM,vec2(0.0,-1.0),fxaaQualityRcpFrame.xy);vec4 rgbaW=FxaaTexOff(tex,posM,vec2(-1.0,0.0),fxaaQualityRcpFrame.xy);bool earlyExit=max(max(max(contrast(rgbaM,rgbaN),contrast(rgbaM,rgbaS)),contrast(rgbaM,rgbaE)),contrast(rgbaM,rgbaW))<fxaaQualityEdgeThreshold;\n#if (FXAA_DISCARD==1)\nif(earlyExit)FxaaDiscard;\n#else\nif(earlyExit)return rgbaM;\n#endif\nfloat contrastN=contrast(rgbaM,rgbaN);float contrastS=contrast(rgbaM,rgbaS);float contrastE=contrast(rgbaM,rgbaE);float contrastW=contrast(rgbaM,rgbaW);float relativeVContrast=(contrastN+contrastS)-(contrastE+contrastW);relativeVContrast*=fxaaQualityinvEdgeThreshold;bool horzSpan=relativeVContrast>0.;if(abs(relativeVContrast)<.3){vec2 dirToEdge;dirToEdge.x=contrastE>contrastW?1.:-1.;dirToEdge.y=contrastS>contrastN?1.:-1.;vec4 rgbaAlongH=FxaaTexOff(tex,posM,vec2(dirToEdge.x,-dirToEdge.y),fxaaQualityRcpFrame.xy);float matchAlongH=contrast(rgbaM,rgbaAlongH);vec4 rgbaAlongV=FxaaTexOff(tex,posM,vec2(-dirToEdge.x,dirToEdge.y),fxaaQualityRcpFrame.xy);float matchAlongV=contrast(rgbaM,rgbaAlongV);relativeVContrast=matchAlongV-matchAlongH;relativeVContrast*=fxaaQualityinvEdgeThreshold;if(abs(relativeVContrast)<.3){return mix(rgbaM,(rgbaN+rgbaS+rgbaE+rgbaW)*.25,.4);}horzSpan=relativeVContrast>0.;}if(!horzSpan)rgbaN=rgbaW;if(!horzSpan)rgbaS=rgbaE;bool pairN=contrast(rgbaM,rgbaN)>contrast(rgbaM,rgbaS);if(!pairN)rgbaN=rgbaS;vec2 offNP;offNP.x=(!horzSpan)?0.0:fxaaQualityRcpFrame.x;offNP.y=(horzSpan)?0.0:fxaaQualityRcpFrame.y;bool doneN=false;bool doneP=false;float nDist=0.;float pDist=0.;vec2 posN=posM;vec2 posP=posM;int iterationsUsed=0;int iterationsUsedN=0;int iterationsUsedP=0;for(int i=0;i<NUM_SAMPLES;i++){iterationsUsed=i;float increment=float(i+1);if(!doneN){nDist+=increment;posN=posM+offNP*nDist;vec4 rgbaEndN=FxaaTexTop(tex,posN.xy);doneN=contrast(rgbaEndN,rgbaM)>contrast(rgbaEndN,rgbaN);iterationsUsedN=i;}if(!doneP){pDist+=increment;posP=posM-offNP*pDist;vec4 rgbaEndP=FxaaTexTop(tex,posP.xy);doneP=contrast(rgbaEndP,rgbaM)>contrast(rgbaEndP,rgbaN);iterationsUsedP=i;}if(doneN||doneP)break;}if(!doneP&&!doneN)return rgbaM;float dist=min(doneN?float(iterationsUsedN)/float(NUM_SAMPLES-1):1.,doneP?float(iterationsUsedP)/float(NUM_SAMPLES-1):1.);dist=pow(dist,.5);dist=1.-dist;return mix(rgbaM,rgbaN,dist*.5);}void main(){const float edgeDetectionQuality=.2;const float invEdgeDetectionQuality=1./edgeDetectionQuality;gl_FragColor=FxaaPixelShader(vUv,tDiffuse,resolution,edgeDetectionQuality,invEdgeDetectionQuality);}"
    };
    class Rs extends Ia {
        constructor(e = "", t = {}) {
            const i = new xa({
                transparent: !0,
                alphaTest: 1e-5
            });
            super(i), this.textMaterial = i, this.text = e, this.font = void 0 === t.font ? "48px Minecraft" : t.font, this.margin = void 0 === t.margin ? [5, 10, 5, 10] : t.margin, this.textStyle = void 0 === t.textStyle ? "white" : t.textStyle, this.backgroundStyle = void 0 === t.backgroundStyle ? "rgba(0,0,0,.25)" : t.backgroundStyle, this.height = void 0 === t.height ? 4 : t.height;
            (void 0 === t.repaintAfterLoaded || t.repaintAfterLoaded) && !document.fonts.check(this.font, this.text) ? (this.paint(), this.painted = this.loadAndPaint()) : (this.paint(), this.painted = Promise.resolve())
        }
        async loadAndPaint() {
            await document.fonts.load(this.font, this.text), this.paint()
        }
        paint() {
            const e = document.createElement("canvas");
            let t = e.getContext("2d");
            t.font = this.font;
            const i = t.measureText(this.text);
            e.width = this.margin[3] + i.actualBoundingBoxLeft + i.actualBoundingBoxRight + this.margin[1], e.height = this.margin[0] + i.actualBoundingBoxAscent + i.actualBoundingBoxDescent + this.margin[2], t = e.getContext("2d"), t.font = this.font, t.fillStyle = this.backgroundStyle, t.fillRect(0, 0, e.width, e.height), t.fillStyle = this.textStyle, t.fillText(this.text, this.margin[3] + i.actualBoundingBoxLeft, this.margin[0] + i.actualBoundingBoxAscent);
            const n = new za(e);
            n.magFilter = g, n.minFilter = g, this.textMaterial.map = n, this.textMaterial.needsUpdate = !0, this.scale.x = e.width / e.height * this.height, this.scale.y = this.height
        }
    }
    class Ds {
        constructor() {
            this.speed = 1, this.paused = !1, this.progress = 0
        }
        update(e, t) {
            if (this.paused) return;
            const i = t * this.speed;
            this.animate(e, i), this.progress += i
        }
    }
    e.BodyPart = $a, e.CapeObject = ts, e.EarsObject = ns, e.ElytraObject = is, e.FlyingAnimation = class extends Ds {
        animate(e) {
            const t = this.progress > 0 ? 20 * this.progress : 0,
                i = (a = 1, (n = t * t / 100) <= (r = 0) ? r : n >= a ? a : n);
            var n, r, a;
            e.rotation.x = i * Math.PI / 2, e.skin.head.rotation.x = i > .5 ? Math.PI / 4 - e.rotation.x : 0;
            const s = .25 * Math.PI * i;
            e.skin.leftArm.rotation.z = s, e.skin.rightArm.rotation.z = -s;
            const o = .34906584,
                l = Math.PI / 2,
                c = Math.pow(.9, t);
            e.elytra.leftWing.rotation.x = o + -.08726644 * c, e.elytra.leftWing.rotation.z = l + c * (.2617994 - l), e.elytra.updateRightWing()
        }
    }, e.FunctionAnimation = class extends Ds {
        constructor(e) {
            super(), this.fn = e
        }
        animate(e, t) {
            this.fn(e, this.progress, t)
        }
    }, e.IdleAnimation = class extends Ds {
        animate(e) {
            const t = 2 * this.progress,
                i = .02 * Math.PI;
            e.skin.leftArm.rotation.z = .03 * Math.cos(t) + i, e.skin.rightArm.rotation.z = .03 * Math.cos(t + Math.PI) - i;
            const n = .06 * Math.PI;
            e.cape.rotation.x = .01 * Math.sin(t) + n
        }
    }, e.NameTagObject = Rs, e.PlayerAnimation = Ds, e.PlayerObject = as, e.RunningAnimation = class extends Ds {
        animate(e) {
            const t = 15 * this.progress + .5 * Math.PI;
            e.skin.leftLeg.rotation.x = 1.3 * Math.cos(t + Math.PI), e.skin.rightLeg.rotation.x = 1.3 * Math.cos(t), e.skin.leftArm.rotation.x = 1.5 * Math.cos(t), e.skin.rightArm.rotation.x = 1.5 * Math.cos(t + Math.PI);
            const i = .1 * Math.PI;
            e.skin.leftArm.rotation.z = .1 * Math.cos(t) + i, e.skin.rightArm.rotation.z = .1 * Math.cos(t + Math.PI) - i, e.position.y = Math.cos(2 * t), e.position.x = .15 * Math.cos(t), e.rotation.z = .01 * Math.cos(t + Math.PI);
            const n = .3 * Math.PI;
            e.cape.rotation.x = .1 * Math.sin(2 * t) + n
        }
    }, e.SkinObject = es, e.SkinViewer = class {
        constructor(e = {}) {
            let t;
            this.globalLight = new qa(16777215, .4), this.cameraLight = new ja(16777215, .6), this.skinTexture = null, this.capeTexture = null, this.earsTexture = null, this.backgroundTexture = null, this._disposed = !1, this._renderPaused = !1, this.autoRotate = !1, this.autoRotateSpeed = 1, this._nameTag = null, this.canvas = void 0 === e.canvas ? document.createElement("canvas") : e.canvas, this.skinCanvas = document.createElement("canvas"), this.capeCanvas = document.createElement("canvas"), this.earsCanvas = document.createElement("canvas"), this.scene = new ma, this.camera = new bi, this.camera.add(this.cameraLight), this.scene.add(this.camera), this.scene.add(this.globalLight), this.renderer = new fa({
                canvas: this.canvas,
                preserveDrawingBuffer: !0 === e.preserveDrawingBuffer
            }), this.onDevicePixelRatioChange = () => {
                this.renderer.setPixelRatio(window.devicePixelRatio), this.updateComposerSize(), "match-device" === this._pixelRatio && (this.devicePixelRatioQuery = matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`), this.devicePixelRatioQuery.addEventListener("change", this.onDevicePixelRatioChange, {
                    once: !0
                }))
            }, void 0 === e.pixelRatio || "match-device" === e.pixelRatio ? (this._pixelRatio = "match-device", this.devicePixelRatioQuery = matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`), this.devicePixelRatioQuery.addEventListener("change", this.onDevicePixelRatioChange, {
                once: !0
            }), this.renderer.setPixelRatio(window.devicePixelRatio)) : (this._pixelRatio = e.pixelRatio, this.devicePixelRatioQuery = null, this.renderer.setPixelRatio(e.pixelRatio)), this.renderer.setClearColor(0, 0), this.renderer.capabilities.isWebGL2 && (t = new ge(0, 0, {
                depthTexture: new ua(0, 0, M)
            })), this.composer = new As(this.renderer, t), this.renderPass = new Ls(this.scene, this.camera), this.fxaaPass = new ws(Ps), this.composer.addPass(this.renderPass), this.composer.addPass(this.fxaaPass), this.playerObject = new as, this.playerObject.name = "player", this.playerObject.skin.visible = !1, this.playerObject.cape.visible = !1, this.playerWrapper = new la, this.playerWrapper.add(this.playerObject), this.scene.add(this.playerWrapper), this.controls = new _s(this.camera, this.canvas), this.controls.enablePan = !1, this.controls.minDistance = 10, this.controls.maxDistance = 256, !1 === e.enableControls && (this.controls.enabled = !1), void 0 !== e.skin && this.loadSkin(e.skin, {
                model: e.model,
                ears: "current-skin" === e.ears
            }), void 0 !== e.cape && this.loadCape(e.cape), void 0 !== e.ears && "current-skin" !== e.ears && this.loadEars(e.ears.source, {
                textureType: e.ears.textureType
            }), void 0 !== e.width && (this.width = e.width), void 0 !== e.height && (this.height = e.height), void 0 !== e.background && (this.background = e.background), void 0 !== e.panorama && this.loadPanorama(e.panorama), void 0 !== e.nameTag && (this.nameTag = e.nameTag), this.camera.position.z = 1, this._zoom = void 0 === e.zoom ? .9 : e.zoom, this.fov = void 0 === e.fov ? 50 : e.fov, this._animation = void 0 === e.animation ? null : e.animation, this.clock = new Xa, !0 === e.renderPaused ? (this._renderPaused = !0, this.animationID = null) : this.animationID = window.requestAnimationFrame((() => this.draw())), this.onContextLost = e => {
                e.preventDefault(), null !== this.animationID && (window.cancelAnimationFrame(this.animationID), this.animationID = null)
            }, this.onContextRestored = () => {
                this.renderer.setClearColor(0, 0), this._renderPaused || this._disposed || null !== this.animationID || (this.animationID = window.requestAnimationFrame((() => this.draw())))
            }, this.canvas.addEventListener("webglcontextlost", this.onContextLost, !1), this.canvas.addEventListener("webglcontextrestored", this.onContextRestored, !1)
        }
        updateComposerSize() {
            this.composer.setSize(this.width, this.height);
            const e = this.renderer.getPixelRatio();
            this.composer.setPixelRatio(e), this.fxaaPass.material.uniforms.resolution.value.x = 1 / (this.width * e), this.fxaaPass.material.uniforms.resolution.value.y = 1 / (this.height * e)
        }
        recreateSkinTexture() {
            null !== this.skinTexture && this.skinTexture.dispose(), this.skinTexture = new za(this.skinCanvas), this.skinTexture.magFilter = g, this.skinTexture.minFilter = g, this.playerObject.skin.map = this.skinTexture
        }
        recreateCapeTexture() {
            null !== this.capeTexture && this.capeTexture.dispose(), this.capeTexture = new za(this.capeCanvas), this.capeTexture.magFilter = g, this.capeTexture.minFilter = g, this.playerObject.cape.map = this.capeTexture, this.playerObject.elytra.map = this.capeTexture
        }
        recreateEarsTexture() {
            null !== this.earsTexture && this.earsTexture.dispose(), this.earsTexture = new za(this.earsCanvas), this.earsTexture.magFilter = g, this.earsTexture.minFilter = g, this.playerObject.ears.map = this.earsTexture
        }
        loadSkin(e, t = {}) {
            if (null === e) this.resetSkin();
            else {
                if (!ss(e)) return fs(e).then((e => this.loadSkin(e, t)));
                hs(this.skinCanvas, e), this.recreateSkinTexture(), void 0 === t.model || "auto-detect" === t.model ? this.playerObject.skin.modelType = function(e) {
                    const t = ls(e.width),
                        i = e.getContext("2d"),
                        n = (e, n, r, a) => os(i, e * t, n * t, r * t, a * t),
                        r = (e, n, r, a) => function(e, t, i, n, r) {
                            const a = e.getImageData(t, i, n, r);
                            for (let e = 0; e < n; e++)
                                for (let t = 0; t < r; t++) {
                                    const i = 4 * (e + t * n);
                                    if (0 !== a.data[i + 0] || 0 !== a.data[i + 1] || 0 !== a.data[i + 2] || 255 !== a.data[i + 3]) return !1
                                }
                            return !0
                        }(i, e * t, n * t, r * t, a * t),
                        a = (e, n, r, a) => function(e, t, i, n, r) {
                            const a = e.getImageData(t, i, n, r);
                            for (let e = 0; e < n; e++)
                                for (let t = 0; t < r; t++) {
                                    const i = 4 * (e + t * n);
                                    if (255 !== a.data[i + 0] || 255 !== a.data[i + 1] || 255 !== a.data[i + 2] || 255 !== a.data[i + 3]) return !1
                                }
                            return !0
                        }(i, e * t, n * t, r * t, a * t);
                    return n(50, 16, 2, 4) || n(54, 20, 2, 12) || n(42, 48, 2, 4) || n(46, 52, 2, 12) || r(50, 16, 2, 4) && r(54, 20, 2, 12) && r(42, 48, 2, 4) && r(46, 52, 2, 12) || a(50, 16, 2, 4) && a(54, 20, 2, 12) && a(42, 48, 2, 4) && a(46, 52, 2, 12) ? "slim" : "default"
                }(this.skinCanvas) : this.playerObject.skin.modelType = t.model, !1 !== t.makeVisible && (this.playerObject.skin.visible = !0), !0 !== t.ears && "load-only" != t.ears || (ps(this.earsCanvas, e), this.recreateEarsTexture(), !0 === t.ears && (this.playerObject.ears.visible = !0))
            }
        }
        resetSkin() {
            this.playerObject.skin.visible = !1, this.playerObject.skin.map = null, null !== this.skinTexture && (this.skinTexture.dispose(), this.skinTexture = null)
        }
        loadCape(e, t = {}) {
            if (null === e) this.resetCape();
            else {
                if (!ss(e)) return fs(e).then((e => this.loadCape(e, t)));
                us(this.capeCanvas, e), this.recreateCapeTexture(), !1 !== t.makeVisible && (this.playerObject.backEquipment = void 0 === t.backEquipment ? "cape" : t.backEquipment)
            }
        }
        resetCape() {
            this.playerObject.backEquipment = null, this.playerObject.cape.map = null, this.playerObject.elytra.map = null, null !== this.capeTexture && (this.capeTexture.dispose(), this.capeTexture = null)
        }
        loadEars(e, t = {}) {
            if (null === e) this.resetEars();
            else {
                if (!ss(e)) return fs(e).then((e => this.loadEars(e, t)));
                "skin" === t.textureType ? ps(this.earsCanvas, e) : ds(this.earsCanvas, e), this.recreateEarsTexture(), !1 !== t.makeVisible && (this.playerObject.ears.visible = !0)
            }
        }
        resetEars() {
            this.playerObject.ears.visible = !1, this.playerObject.ears.map = null, null !== this.earsTexture && (this.earsTexture.dispose(), this.earsTexture = null)
        }
        loadPanorama(e) {
            return this.loadBackground(e, u)
        }
        loadBackground(e, t) {
            if (!ss(e)) return fs(e).then((e => this.loadBackground(e, t)));
            null !== this.backgroundTexture && this.backgroundTexture.dispose(), this.backgroundTexture = new fe, this.backgroundTexture.image = e, void 0 !== t && (this.backgroundTexture.mapping = t), this.backgroundTexture.needsUpdate = !0, this.scene.background = this.backgroundTexture
        }
        draw() {
            const e = this.clock.getDelta();
            null !== this._animation && this._animation.update(this.playerObject, e), this.autoRotate && (this.playerWrapper.rotation.y += e * this.autoRotateSpeed), this.controls.update(), this.render(), this.animationID = window.requestAnimationFrame((() => this.draw()))
        }
        render() {
            this.composer.render()
        }
        setSize(e, t) {
            this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t), this.updateComposerSize()
        }
        dispose() {
            this._disposed = !0, this.canvas.removeEventListener("webglcontextlost", this.onContextLost, !1), this.canvas.removeEventListener("webglcontextrestored", this.onContextRestored, !1), null !== this.devicePixelRatioQuery && (this.devicePixelRatioQuery.removeEventListener("change", this.onDevicePixelRatioChange), this.devicePixelRatioQuery = null), null !== this.animationID && (window.cancelAnimationFrame(this.animationID), this.animationID = null), this.controls.dispose(), this.renderer.dispose(), this.resetSkin(), this.resetCape(), this.resetEars(), this.background = null, this.fxaaPass.fsQuad.dispose()
        }
        get disposed() {
            return this._disposed
        }
        get renderPaused() {
            return this._renderPaused
        }
        set renderPaused(e) {
            this._renderPaused = e, this._renderPaused && null !== this.animationID ? (window.cancelAnimationFrame(this.animationID), this.animationID = null, this.clock.stop(), this.clock.autoStart = !0) : this._renderPaused || this._disposed || this.renderer.getContext().isContextLost() || null != this.animationID || (this.animationID = window.requestAnimationFrame((() => this.draw())))
        }
        get width() {
            return this.renderer.getSize(new Y).width
        }
        set width(e) {
            this.setSize(e, this.height)
        }
        get height() {
            return this.renderer.getSize(new Y).height
        }
        set height(e) {
            this.setSize(this.width, e)
        }
        get background() {
            return this.scene.background
        }
        set background(e) {
            this.scene.background = null === e || e instanceof le || e instanceof fe ? e : new le(e), null !== this.backgroundTexture && e !== this.backgroundTexture && (this.backgroundTexture.dispose(), this.backgroundTexture = null)
        }
        adjustCameraDistance() {
            let e = 4.5 + 16.5 / Math.tan(this.fov / 180 * Math.PI / 2) / this.zoom;
            e < 10 ? e = 10 : e > 256 && (e = 256), this.camera.position.multiplyScalar(e / this.camera.position.length()), this.camera.updateProjectionMatrix()
        }
        resetCameraPose() {
            this.camera.position.set(0, 0, 1), this.camera.rotation.set(0, 0, 0), this.adjustCameraDistance()
        }
        get fov() {
            return this.camera.fov
        }
        set fov(e) {
            this.camera.fov = e, this.adjustCameraDistance()
        }
        get zoom() {
            return this._zoom
        }
        set zoom(e) {
            this._zoom = e, this.adjustCameraDistance()
        }
        get pixelRatio() {
            return this._pixelRatio
        }
        set pixelRatio(e) {
            "match-device" === e ? "match-device" !== this._pixelRatio && (this._pixelRatio = e, this.onDevicePixelRatioChange()) : ("match-device" === this._pixelRatio && null !== this.devicePixelRatioQuery && (this.devicePixelRatioQuery.removeEventListener("change", this.onDevicePixelRatioChange), this.devicePixelRatioQuery = null), this._pixelRatio = e, this.renderer.setPixelRatio(e), this.updateComposerSize())
        }
        get animation() {
            return this._animation
        }
        set animation(e) {
            this._animation !== e && (this.playerObject.resetJoints(), this.playerObject.position.set(0, 0, 0), this.playerObject.rotation.set(0, 0, 0), this.clock.stop(), this.clock.autoStart = !0), null !== e && (e.progress = 0), this._animation = e
        }
        get nameTag() {
            return this._nameTag
        }
        set nameTag(e) {
            null !== this._nameTag && this.playerWrapper.remove(this._nameTag), null !== e && (e instanceof bt || (e = new Rs(e)), this.playerWrapper.add(e), e.position.y = 20), this._nameTag = e
        }
    }, e.WalkingAnimation = class extends Ds {
        constructor() {
            super(...arguments), this.headBobbing = !0
        }
        animate(e) {
            const t = 8 * this.progress;
            e.skin.leftLeg.rotation.x = .5 * Math.sin(t), e.skin.rightLeg.rotation.x = .5 * Math.sin(t + Math.PI), e.skin.leftArm.rotation.x = .5 * Math.sin(t + Math.PI), e.skin.rightArm.rotation.x = .5 * Math.sin(t);
            const i = .02 * Math.PI;
            e.skin.leftArm.rotation.z = .03 * Math.cos(t) + i, e.skin.rightArm.rotation.z = .03 * Math.cos(t + Math.PI) - i, this.headBobbing ? (e.skin.head.rotation.y = .2 * Math.sin(t / 4), e.skin.head.rotation.x = .1 * Math.sin(t / 5)) : (e.skin.head.rotation.y = 0, e.skin.head.rotation.x = 0);
            const n = .06 * Math.PI;
            e.cape.rotation.x = .06 * Math.sin(t / 1.5) + n
        }
    }, Object.defineProperty(e, "__esModule", {
        value: !0
    })
})); //# sourceMappingURL=skinview3d.bundle.js.map