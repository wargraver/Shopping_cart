function fetchpr(done){
    $.get('/products',function(data){
        done(data)
    })
}
function createpr(x){
    return $(`
    <div class="card border-primary mb-3" style="width:18rem;">
    <div class="card-body>
    <h4 class="card-title ml-4">${x.name}</h4>
    <div class="card-text ml-4">RS.${x.price}</div>
    <div class="card-text ml-4">${x.manufacturer}</div>
    </div>
    </div>
    `)
}

$(function(){
    let productlist=$('#productlist')
    fetchpr(function(products){
        productlist.empty()
        console.log(products)
        console.log("hello")
        for(let i=0;i<products.length;i++){
            console.log(products[i])
            productlist.append(createpr(products[i]))
        }
    })
})