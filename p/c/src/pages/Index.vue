<template>
  <q-page>
    <div class="row">
    	<div class="col col-md-3"> 
    		<q-list>
    			<q-list-header> Leads online </q-list-header>

    			<q-item>
    				<q-item-side icon="contacts"/>
    				<q-item-main label="Josh"/>
    				<q-item-side right icon="chat_bubble"/>
    			</q-item>

    			<q-item>
    				<q-item-side icon="contacts"/>
    				<q-item-main label="Mary"/>
    				<q-item-side right icon="chat_bubble"/>
    			</q-item>

    			<q-item>
    				<q-item-side icon="contacts"/>
    				<q-item-main label="Sean"/>
    				<q-item-side right icon="chat_bubble"/>
    			</q-item>

    			<q-item>
    				<q-item-side icon="contacts"/>
    				<q-item-main label="Niahm"/>
    				<q-item-side right icon="chat_bubble"/>
    			</q-item>

    			<q-item>
    				<q-item-side icon="contacts"/>
    				<q-item-main label="lead 1"/>
    				<q-item-side right icon="chat_bubble"/>
    			</q-item>    			    			    			
    		</q-list>
    	</div>

    	<div class="col col-md-9">
    		
    		<q-card>
    			<q-card-title>
    				Chat <small class="text-faded"> Lead 1 </small>    				
    			</q-card-title>	
    			<q-card-separator/>
    			<q-card-main>
    				<q-chat-message label="Monday, 06 January"/>

    				<q-chat-message
    					name ="Josh"
    					:text ="['Hy, how are you?']"
    					:sent = "false"
    					stamp = "4 minutes ago"
    				/>
    				
    				<q-chat-message
    					name ="Support"
    					:text ="['Good, and you', 'Please inform your email']"
    					:sent = "true"
    					stamp = "4 minutes ago"
    				/>

    			</q-card-main>		
    		</q-card>

    	</div>


    </div>	
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
