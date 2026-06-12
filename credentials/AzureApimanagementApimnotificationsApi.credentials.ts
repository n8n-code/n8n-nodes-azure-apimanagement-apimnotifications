import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApimanagementApimnotificationsApi implements ICredentialType {
        name = 'N8nDevAzureApimanagementApimnotificationsApi';

        displayName = 'Azure Apimanagement Apimnotifications API';

        icon: Icon = { light: 'file:../nodes/AzureApimanagementApimnotifications/azure-apimanagement-apimnotifications.png', dark: 'file:../nodes/AzureApimanagementApimnotifications/azure-apimanagement-apimnotifications.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Apimanagement Apimnotifications API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
