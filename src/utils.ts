/* eslint-disable no-unused-vars */
export function random(
	min: number,
	max: number,
	math?: 'floor' | 'round' | 'ceil',
): number {
	const result = Math.random() * (max - min) + min
	if (math) {
		// eslint-disable-next-line default-case
		switch (math) {
			case 'floor':
				return Math.floor(result)
			case 'round':
				return Math.round(result)
			case 'ceil':
				return Math.ceil(result)
		}
	}
	return result
}

export function randomChild<T>(array: Array<T>): T
export function randomChild(array: string): string
export function randomChild(array: any[] | string): any {
	return array[random(0, array.length, 'floor')]
}

export function filterDuplicates(iterable: string): string
export function filterDuplicates<T>(iterable: Array<T>): Array<T>
export function filterDuplicates(iterable: any[] | string): any {
	const isString = typeof iterable === 'string',
		result: any[] = []
	new Set(iterable).forEach(x => result.push(x))
	return isString ? result.join('') : result
}

export function parseCharset(input: string | string[] | Set<string>): string {
	let result: string
	// Charset is a string
	if (typeof input === 'string') result = input
	// Charset is an array
	else if ((input as string[]).length) result = (input as string[]).join('')
	// Charset is a Set
	else result = Array.from(input as Set<string>).join('')

	return result
}
