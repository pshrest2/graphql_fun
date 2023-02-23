namespace :graphql do
    namespace :schema do
        desc "Dumps the graphql schema"
        task dump: :environment do
            SchemaPrinter.print!
        end
    end
end