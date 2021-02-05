
export async function getServerData() {
    try {
        const res = await fetch('cardProduct.json');
        const data = await res.json();
        console.log(data);
        return data.products
    } catch (error) {
        console.log('error');
    }
}