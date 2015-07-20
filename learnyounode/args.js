i = 2;
result = 0;
while(process.argv[i])
{
	result += Number(process.argv[i]);
	i++;
}
console.log(result);

