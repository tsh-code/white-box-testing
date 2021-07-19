const forTheArticle=require('./forTheArticle')

test('test decisions forTheArticle ',()=>{
    expect(forTheArticle(1,2,0,0)).toBe(3)
    expect(forTheArticle(3,-4,5,0)).toBe(8)
    expect(forTheArticle(2,-1,1,2)).toBe(1)
    expect(forTheArticle(-1,5,0,3)).toBe(5)
    expect(forTheArticle(-1,1,0,3)).toBe(-3)
})

test('test instructions forTheArticle ',()=>{
    expect(forTheArticle(3,-4,5,0)).toBe(8)
    expect(forTheArticle(-1,5,0,3)).toBe(5)
})