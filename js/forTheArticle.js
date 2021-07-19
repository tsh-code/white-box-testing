function forTheArticle(a, b, c, d) {
    if (a > 0) {
        if (b > 0) {
            return a + b
        } else {
            if (c > a) {
                return c + a;
            }else{
                return d+b;
            }
        }
    } else {
        if (b > d) {
            return c + b
        } else {
            return d * a
        }
    }
}
module.exports = forTheArticle