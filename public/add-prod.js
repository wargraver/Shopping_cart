function postpr(name,price,manufact,done){
    $.post('/products',{
        name:name,
        price:price,
        manufacturer:manufact
    },function(data){done(data)})
}
$(function(){
    let name=$('#prod_name')
    let pric=$('#price')
    let manuf=$('#man_name')

    console.log(name.val(),pric.val(),manuf.val())
    
$('#add_prod').click(function(){
       // console.log($('#prod_name').val())
       postpr(name.val(),pric.val(),manuf.val(),function(data){
              window.alert("added product to database")
              let x=name.val()
    let x2=pric.val()
              console.log(x,x2)
        })
    })
})