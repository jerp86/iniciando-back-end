interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'jose@eduardo.com', // email autorizado da AWS
      name: 'José Eduardo Rodrigues Pinto',
    },
  },
} as IMailConfig;
