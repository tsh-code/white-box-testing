const forTheArticle=require('./forTheArticle')

test('test instructions forTheArticle ',()=>{
    expect(forTheArticle(3,-4,5,0)).toBe(8)
    expect(forTheArticle(-1,5,0,3)).toBe(5)
})