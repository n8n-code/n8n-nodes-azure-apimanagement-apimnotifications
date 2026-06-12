import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApimanagementApimnotifications implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Apimanagement Apimnotifications',
                name: 'N8nDevAzureApimanagementApimnotifications',
                icon: { light: 'file:./azure-apimanagement-apimnotifications.png', dark: 'file:./azure-apimanagement-apimnotifications.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Use REST APIs to manage Azure API Management notification recipients.',
                defaults: { name: 'Azure Apimanagement Apimnotifications' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApimanagementApimnotificationsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
