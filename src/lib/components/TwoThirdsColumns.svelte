<div class="px-6 gap-6 py-6 flex md:flex-nowrap flex-wrap">
	<div class="md:w-1/3 flex flex-col gap-6 print:gap-4">
		<slot name="column-one" />
	</div>
	<div class="md:w-2/3 flex flex-col gap-6">
		<slot name="column-two" />
	</div>
</div>
