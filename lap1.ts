const numArray = [1,9,4,5,7,10]



function selectionSort<T> ( array: T[], callback?: ( a: T, b: T ) => T ): T[]
{


    for ( let i = 0; i < array.length - 1; i++ )
    {


        for ( let j = i + 1; j < array.length; j++ )
        {
            if ( ( !callback && array[ i ] > array[ j ] ) ||
                ( callback && callback( array[ i ], array[ j ] ) > 0 ) )
            {
                var temp = array[ i ];
                array[ i ] = array[ j ];
                array[ j ] = temp;

            }
        }

    }

    return array;
}
const resutt = selectionSort<number>( numArray, ( a, b ) =>
{
    return b - a

} )
console.log( resutt );




 



